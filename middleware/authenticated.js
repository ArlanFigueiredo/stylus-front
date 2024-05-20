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
        if (data.status == true) {
          redirect("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
