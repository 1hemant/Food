import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BearerniULLDwtlTKZQ_nrhPtRI-6vljaQTIcxOQfWhAkfYiFdnefhXahK6iCcTfn8hVZdmmmMjXCp56n6SSPxChQZjPgOj5xYp31r5ONvZygQPgNYgpEWhmzTGkIzAJ6xYXYx",
  },
});
