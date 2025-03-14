async function postDataFetch() {

    const controller = new AbortController();
    const signal = controller.signal;

    const url = "https://jsonplaceholder.typicode.com/posts";
    
    const requestBody = {
      title: "Hello World",
      body: "This is a test post.",
      userId: 1
    };
  
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer my-token"
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
        signal
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetch Response:", data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }

    //controller.abort()
  }
  
  postDataFetch();
  