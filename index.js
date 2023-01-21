const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  // const today = "13/01"
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já está incluso!");
    return;
  }

  nlwSetup.addDay(today);
});

form.addEventListener("change", () => {
  localStorage.setItem("NLWSetup@Habits", JSON.stringify(nlwSetup.data));
});

// const data = {
//     run: [],
//     water: ['01-01', '01-02', '01-06', '01-07', '01-08', '01-09'],
//     brain: ['01-01', '01-02', '01-06'],
//     sleep: ['01-01', '01-02', '01-06'],
//     takePills: ['01-01', '01-02', '01-06'],
//     journal: ['01-01', '01-02', '01-06', '01-10'],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
