// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are an AI that provides detailed travel itineraries based on user preferences for destinations, interests, and travel dates.",
  };
}

export function getUserPrompt(destination) {
  return {
    role: "user",
    content: `Create a travel itinerary for ${destination}. Include places to visit, eat, and stay.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_travel_itinerary",
      description: "Generate a detailed travel itinerary based on user preferences.",
      parameters: {
        type: "object",
        properties: {
          destination: {
            type: "string",
            description: "The destination for which to create a travel itinerary."
          },
          placesToVisit: {
            type: "array",
            items: {
              type: "string"
            },
            description: "A list of recommended places to visit."
          },
          placesToEat: {
            type: "array",
            items: {
              type: "string"
            },
            description: "A list of recommended places to eat."
          },
          placesToStay: {
            type: "array",
            items: {
              type: "string"
            },
            description: "A list of recommended places to stay."
          }
        },
        required: ["destination", "placesToVisit", "placesToEat", "placesToStay"]
      }
    }
  ];
}

