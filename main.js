function submit() {
  const radioInputs = document.querySelector(
    'input[name="rate-value"]:checked'
  ).value;
  const content = document.getElementById("content");
  content.remove();
  document.getElementById("box").innerHTML += `<div class="thank-you">
  <img
    src="./images/illustration-thank-you.svg"
    alt="thankyou"
    class="thank-you-img"
  />
  <p class="result">You selected ${radioInputs} out of 5</p>
  <h1>Thank you!</h1>
  <p >
    We appreciate you taking the time to give a rating. If you ever need
    more support, don't hesitate to get in touch!
  </p>
</div>
`;
}
