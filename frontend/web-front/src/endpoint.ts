const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://api.quizrunner.net/api/quiz/"
    : "http://127.0.0.1:8000/api/quiz/";
// if develop environment enable below endpoint
// const endpoint = "http://127.0.0.1:8000/api/quiz/";
export default endpoint;
