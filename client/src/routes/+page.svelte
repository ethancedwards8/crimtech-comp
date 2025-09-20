<script>
  let count = 0;
  let increment = 1;

  async function callCountAPI() {
    const response = await fetch('/api/count', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ increment })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    count = data.total;
  }
</script>

<div>
  <h1>Count Service</h1>
  
  <div>
    Current Count: <span class="count-number">{count}</span>
  </div>

  <div>
    <button on:click={callCountAPI}>
      Add!
    </button>
  </div>
</div>

