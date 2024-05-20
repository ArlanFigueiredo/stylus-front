<template>
  <div>
    <div id="paymentBrick_container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadMercadoPagoLibrary().then(() => {
      this.renderPaymentBrick();
    });
  },
  methods: {
    loadMercadoPagoLibrary() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    async renderPaymentBrick() {
      const mp = new MercadoPago('TEST-0f7761d0-cc2c-426f-846a-a9f5754142d9', {
        locale: 'pt'
      });
      const bricksBuilder = mp.bricks();

      const settings = {
        initialization: {
          amount: 10000,
          preferenceId: "https://api.mercadopago.com/checkout/preferences",
          payer: {
            firstName: "",
            lastName: "",
            email: "",
          },
        },
        customization: {
          visual: {
            style: {
              theme: "default",
            },
          },
          paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            atm: "all",
            maxInstallments: 1
          },
        },
        callbacks: {
          onReady: () => {
            // Callback chamado quando o Brick está pronto.
            // Aqui, você pode ocultar seu site, por exemplo.
          },
          onSubmit: ({ selectedPaymentMethod, formData }) => {
            // Callback chamado quando há click no botão de envio de dados
            return new Promise((resolve, reject) => {
              fetch("/process_payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
              .then((response) => response.json())
              .then((response) => {
                // Receber o resultado do pagamento
                resolve();
              })
              .catch((error) => {
                // Manejar a resposta de erro ao tentar criar um pagamento
                reject();
              });
            });
          },
          onError: (error) => {
            // Callback chamado para todos os casos de erro do Brick
            console.error(error);
          },
        },
      };

      window.paymentBrickController = await bricksBuilder.create(
        "payment",
        "paymentBrick_container",
        settings
      );
    }
  }
}
</script>
