export default async function ({ app, redirect, $axios }) {
  const token = localStorage.getItem("token");
  if (token != null || token != undefined) {
    await $axios
      .$get(
        "me",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        () => {}
      )
      .then((data) => {
        // if (
        //   data.status != true ||
        //   data.status == null ||
        //   data.status == undefined
        // ) {
        //   redirect("/login");
        // }
        console.log(data);
      })
      .catch((err) => {
        localStorage.clear("authenticated");
        redirect("/login");
        console.log(err);
      });
  }
}
