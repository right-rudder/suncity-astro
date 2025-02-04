import type { APIRoute } from "astro";

const MONDAY_API_URL = "https://api.monday.com/v2";
// const MONDAY_API_KEY = import.meta.env.MONDAY_API_KEY;
// const MONDAY_BOARD_ID = import.meta.env.MONDAY_BOARD_ID; // Replace with your board ID

const MONDAY_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4NTk3MTAxNCwiYWFpIjoxMSwidWlkIjozNjU3NTA5NiwiaWFkIjoiMjAyMy0xMC0wM1QwOToxNjozNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTQxNTUyMTQsInJnbiI6InVzZTEifQ.gXbleOZaGl3TvCNq--xqEyn3LzR4Y5HvWZ9yefXbis8";
const MONDAY_BOARD_ID = "3536260889";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { firstName, lastName, phone, email, message } = await request.json();

    const query = `
      mutation {
        create_item (
          board_id: ${MONDAY_BOARD_ID},
          item_name: "${firstName} ${lastName}",
          column_values: "{\\"email\\" : \\"${email}\\", \\"phone\\" : \\"${phone}\\", \\"text\\" : \\"${message}\\"}"
        ) {
          id
        }
      }
    `;

    const response = await fetch(MONDAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: MONDAY_API_KEY,
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (json.errors) {
      return new Response(JSON.stringify({ message: "Monday API error", errors: json.errors }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Success", data: json }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error", error }), { status: 500 });
  }
};
