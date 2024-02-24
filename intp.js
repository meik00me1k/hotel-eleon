fetch("https://hotelbooking.stepprojects.ge/api/Booking")
.then((room) => room.json())
.then((Booking) => {
console.log(Booking);
const productContainer = document.getElementById("card")
products.forEach((Booking) => {
const card = createProductCard(room);
productContainer.appendChild(card);
});
})
.catch((error) => console.log(error));

[
    {
      "id": 10,
      "roomID": 5,
      "checkInDate": "2023-09-22T12:18:13.435",
      "checkOutDate": "2023-09-22T12:18:13.435",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 11,
      "roomID": 5,
      "checkInDate": "2023-09-22T12:18:13.435",
      "checkOutDate": "2023-09-22T12:18:13.435",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "wwwww",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 12,
      "roomID": 2,
      "checkInDate": "2023-09-22T12:18:13.435",
      "checkOutDate": "2023-09-22T12:18:13.435",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "ირაკლი",
      "customerId": "string",
      "customerPhone": "555 555 555"
    },
    {
      "id": 31,
      "roomID": 3,
      "checkInDate": "2023-11-24T16:10:09.447",
      "checkOutDate": "2023-11-24T16:10:09.447",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "qwrqwrqw",
      "customerId": "string",
      "customerPhone": "strqwrqwrqwring"
    },
    {
      "id": 32,
      "roomID": 3,
      "checkInDate": "2023-11-24T16:10:09.447",
      "checkOutDate": "2023-11-24T16:10:09.447",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "qwrqwrqw",
      "customerId": "string",
      "customerPhone": "strqwrqwrqwring"
    },
    {
      "id": 33,
      "roomID": 3,
      "checkInDate": "2023-11-24T16:10:09.447",
      "checkOutDate": "2023-11-24T16:10:09.447",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "qwrqwrqw",
      "customerId": "string",
      "customerPhone": "strqwrqwrqwring"
    },
    {
      "id": 43,
      "roomID": 1,
      "checkInDate": "2023-12-18T20:00:00",
      "checkOutDate": "2023-12-19T20:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "dato",
      "customerId": "1",
      "customerPhone": "1234345555dd"
    },
    {
      "id": 57,
      "roomID": 20,
      "checkInDate": "2023-12-12T20:00:00",
      "checkOutDate": "2023-12-13T20:00:00",
      "totalPrice": 149,
      "isConfirmed": true,
      "customerName": "",
      "customerId": "1",
      "customerPhone": ""
    },
    {
      "id": 109,
      "roomID": 1,
      "checkInDate": "0001-01-01T00:00:00",
      "checkOutDate": "0001-01-01T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": null,
      "customerId": null,
      "customerPhone": null
    },
    {
      "id": 114,
      "roomID": 2,
      "checkInDate": "2024-02-12T17:15:15.587",
      "checkOutDate": "2024-05-12T17:15:15.587",
      "totalPrice": 26910,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 115,
      "roomID": 15,
      "checkInDate": "2024-02-12T17:15:15.587",
      "checkOutDate": "2024-05-12T17:15:15.587",
      "totalPrice": 13410,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 116,
      "roomID": 3,
      "checkInDate": "2024-03-22T00:00:00",
      "checkOutDate": "2024-04-27T00:00:00",
      "totalPrice": 3204,
      "isConfirmed": false,
      "customerName": "dsasa",
      "customerId": null,
      "customerPhone": "232"
    },
    {
      "id": 117,
      "roomID": 2,
      "checkInDate": "2024-05-03T00:00:00",
      "checkOutDate": "2024-04-27T00:00:00",
      "totalPrice": -1794,
      "isConfirmed": false,
      "customerName": "dsasa",
      "customerId": null,
      "customerPhone": "3332"
    },
    {
      "id": 118,
      "roomID": 1,
      "checkInDate": "2024-02-08T00:00:00",
      "checkOutDate": "2024-02-22T00:00:00",
      "totalPrice": 2786,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "64352345"
    },
    {
      "id": 119,
      "roomID": 3,
      "checkInDate": "2024-02-13T00:00:00",
      "checkOutDate": "2024-02-21T00:00:00",
      "totalPrice": 712,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "523513513"
    },
    {
      "id": 120,
      "roomID": 1,
      "checkInDate": "2024-02-06T00:00:00",
      "checkOutDate": "2024-02-08T00:00:00",
      "totalPrice": 398,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "519419"
    },
    {
      "id": 121,
      "roomID": 19,
      "checkInDate": "2024-01-31T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": 2587,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "55959595"
    },
    {
      "id": 122,
      "roomID": 19,
      "checkInDate": "2024-01-31T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": 2587,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "55959595"
    },
    {
      "id": 123,
      "roomID": 3,
      "checkInDate": "2024-05-22T00:00:00",
      "checkOutDate": "2024-03-20T00:00:00",
      "totalPrice": -5607,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "5543141"
    },
    {
      "id": 124,
      "roomID": 3,
      "checkInDate": "2024-05-22T00:00:00",
      "checkOutDate": "2024-03-20T00:00:00",
      "totalPrice": -5607,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "5543141"
    },
    {
      "id": 125,
      "roomID": 3,
      "checkInDate": "2024-05-22T00:00:00",
      "checkOutDate": "2024-05-31T00:00:00",
      "totalPrice": 801,
      "isConfirmed": false,
      "customerName": "ani",
      "customerId": null,
      "customerPhone": "554314"
    },
    {
      "id": 126,
      "roomID": 1,
      "checkInDate": "2024-02-14T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": -199,
      "isConfirmed": false,
      "customerName": "",
      "customerId": null,
      "customerPhone": ""
    },
    {
      "id": 127,
      "roomID": 10,
      "checkInDate": "2024-05-06T00:00:00",
      "checkOutDate": "2024-05-16T00:00:00",
      "totalPrice": 990,
      "isConfirmed": false,
      "customerName": "fwef",
      "customerId": null,
      "customerPhone": "fewew"
    },
    {
      "id": 128,
      "roomID": 12,
      "checkInDate": "2023-03-29T00:00:00",
      "checkOutDate": "2023-03-02T00:00:00",
      "totalPrice": -2673,
      "isConfirmed": false,
      "customerName": "htyhyt",
      "customerId": null,
      "customerPhone": "hythty"
    },
    {
      "id": 135,
      "roomID": 17,
      "checkInDate": "2024-02-07T00:00:00",
      "checkOutDate": "2024-02-15T00:00:00",
      "totalPrice": 3192,
      "isConfirmed": false,
      "customerName": "",
      "customerId": null,
      "customerPhone": ""
    },
    {
      "id": 136,
      "roomID": 17,
      "checkInDate": "2024-05-08T00:00:00",
      "checkOutDate": "2024-05-09T00:00:00",
      "totalPrice": 399,
      "isConfirmed": false,
      "customerName": "",
      "customerId": null,
      "customerPhone": ""
    },
    {
      "id": 137,
      "roomID": 10,
      "checkInDate": "2024-12-14T00:00:00",
      "checkOutDate": "2024-12-16T00:00:00",
      "totalPrice": 198,
      "isConfirmed": false,
      "customerName": "",
      "customerId": null,
      "customerPhone": ""
    },
    {
      "id": 138,
      "roomID": 13,
      "checkInDate": "2024-06-13T00:00:00",
      "checkOutDate": "2024-06-14T00:00:00",
      "totalPrice": 199,
      "isConfirmed": false,
      "customerName": "",
      "customerId": null,
      "customerPhone": ""
    },
    {
      "id": 139,
      "roomID": 2,
      "checkInDate": "2024-02-08T00:00:00",
      "checkOutDate": "2024-02-09T00:00:00",
      "totalPrice": 299,
      "isConfirmed": false,
      "customerName": "giorgi",
      "customerId": null,
      "customerPhone": "50555959"
    },
    {
      "id": 140,
      "roomID": 2,
      "checkInDate": "2024-02-07T00:00:00",
      "checkOutDate": "2024-02-07T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "78",
      "customerId": null,
      "customerPhone": "hbunh"
    },
    {
      "id": 141,
      "roomID": 9,
      "checkInDate": "2024-02-06T00:00:00",
      "checkOutDate": "2024-02-07T00:00:00",
      "totalPrice": 199,
      "isConfirmed": false,
      "customerName": "k",
      "customerId": null,
      "customerPhone": "l"
    },
    {
      "id": 142,
      "roomID": 1,
      "checkInDate": "2023-12-06T00:00:00",
      "checkOutDate": "2023-12-07T00:00:00",
      "totalPrice": 199,
      "isConfirmed": false,
      "customerName": "nhuj",
      "customerId": null,
      "customerPhone": "6y789"
    },
    {
      "id": 152,
      "roomID": 2,
      "checkInDate": "2024-02-06T00:00:00",
      "checkOutDate": "2024-02-01T00:00:00",
      "totalPrice": -1495,
      "isConfirmed": false,
      "customerName": "jhgf",
      "customerId": null,
      "customerPhone": "9876789"
    },
    {
      "id": 153,
      "roomID": 2,
      "checkInDate": "2024-02-20T14:34:54.696",
      "checkOutDate": "2024-02-20T14:34:54.696",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 160,
      "roomID": 2,
      "checkInDate": "2024-02-20T14:34:54.696",
      "checkOutDate": "2024-02-20T14:34:54.696",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 162,
      "roomID": 2,
      "checkInDate": "2024-02-08T00:00:00",
      "checkOutDate": "2024-02-03T00:00:00",
      "totalPrice": -1495,
      "isConfirmed": false,
      "customerName": "cdw",
      "customerId": null,
      "customerPhone": "fdws"
    },
    {
      "id": 164,
      "roomID": 10,
      "checkInDate": "2024-02-13T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 165,
      "roomID": 10,
      "checkInDate": "2024-02-13T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 166,
      "roomID": 10,
      "checkInDate": "2024-02-13T00:00:00",
      "checkOutDate": "2024-02-13T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 168,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 169,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 170,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 171,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 172,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 173,
      "roomID": 20,
      "checkInDate": "2023-10-05T00:00:00",
      "checkOutDate": "2023-10-05T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 174,
      "roomID": 2,
      "checkInDate": "2024-02-22T00:00:00",
      "checkOutDate": "2024-02-07T00:00:00",
      "totalPrice": -4485,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 175,
      "roomID": 2,
      "checkInDate": "2024-02-22T00:00:00",
      "checkOutDate": "2024-02-07T00:00:00",
      "totalPrice": -4485,
      "isConfirmed": false,
      "customerName": "string",
      "customerId": null,
      "customerPhone": "string"
    },
    {
      "id": 183,
      "roomID": 5,
      "checkInDate": "2024-01-03T00:00:00",
      "checkOutDate": "2024-01-04T00:00:00",
      "totalPrice": 99,
      "isConfirmed": false,
      "customerName": "dd",
      "customerId": null,
      "customerPhone": "das"
    },
    {
      "id": 207,
      "roomID": 1,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 208,
      "roomID": 1,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "string"
    },
    {
      "id": 209,
      "roomID": 3,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "string"
    },
    {
      "id": 210,
      "roomID": 2,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 211,
      "roomID": 2,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 212,
      "roomID": 2,
      "checkInDate": "2024-03-23T10:31:06.459",
      "checkOutDate": "2024-03-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 213,
      "roomID": 2,
      "checkInDate": "2024-05-23T10:31:06.459",
      "checkOutDate": "2024-06-23T10:31:06.459",
      "totalPrice": 9269,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 214,
      "roomID": 2,
      "checkInDate": "2024-05-23T10:31:06.459",
      "checkOutDate": "2024-05-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 215,
      "roomID": 2,
      "checkInDate": "2024-02-23T10:31:06.459",
      "checkOutDate": "2024-02-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 216,
      "roomID": 1,
      "checkInDate": "2024-03-23T10:31:06.459",
      "checkOutDate": "2024-03-23T10:31:06.459",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 217,
      "roomID": 1,
      "checkInDate": "2024-03-23T10:31:06.459",
      "checkOutDate": "2024-05-23T10:31:06.459",
      "totalPrice": 12139,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 218,
      "roomID": 1,
      "checkInDate": "2024-08-23T11:07:01.609",
      "checkOutDate": "2024-08-23T11:07:01.609",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 219,
      "roomID": 2,
      "checkInDate": "2024-02-25T00:00:00",
      "checkOutDate": "2024-02-25T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": null,
      "customerId": null,
      "customerPhone": null
    },
    {
      "id": 220,
      "roomID": 2,
      "checkInDate": "2024-02-23T00:00:00",
      "checkOutDate": "2024-02-23T00:00:00",
      "totalPrice": 0,
      "isConfirmed": false,
      "customerName": null,
      "customerId": null,
      "customerPhone": null
    },
    {
      "id": 221,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-08-23T11:07:01.609",
      "totalPrice": 6169,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 222,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 223,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 224,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 225,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 226,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Premium Room",
      "customerPhone": "string"
    },
    {
      "id": 227,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Premium Room",
      "customerPhone": "5678943"
    },
    {
      "id": 228,
      "roomID": 1,
      "checkInDate": "2024-07-23T11:07:01.609",
      "checkOutDate": "2024-06-23T11:07:01.609",
      "totalPrice": -5970,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Premium Room",
      "customerPhone": "5678943"
    },
    {
      "id": 229,
      "roomID": 1,
      "checkInDate": "2024-02-23T11:51:42.264",
      "checkOutDate": "2024-02-23T11:51:42.264",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 230,
      "roomID": 2,
      "checkInDate": "2024-02-24T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "susiki",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "87659765"
    },
    {
      "id": 231,
      "roomID": 2,
      "checkInDate": "2024-02-24T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "susoo",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "6543789"
    },
    {
      "id": 232,
      "roomID": 2,
      "checkInDate": "2024-02-23T00:00:00",
      "checkOutDate": "2024-02-23T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "susooo",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "123456"
    },
    {
      "id": 233,
      "roomID": 1,
      "checkInDate": "2024-06-23T11:53:31.045",
      "checkOutDate": "2024-06-23T11:53:31.045",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "654321"
    },
    {
      "id": 234,
      "roomID": 1,
      "checkInDate": "2024-06-24T11:53:31.045",
      "checkOutDate": "2024-06-24T11:53:31.045",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "654321"
    },
    {
      "id": 235,
      "roomID": 2,
      "checkInDate": "2024-03-23T11:53:31.045",
      "checkOutDate": "2024-02-23T11:53:31.045",
      "totalPrice": -8671,
      "isConfirmed": true,
      "customerName": "suso",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "654321"
    },
    {
      "id": 236,
      "roomID": 2,
      "checkInDate": "2024-02-24T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "susoo",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "654321"
    },
    {
      "id": 237,
      "roomID": 2,
      "checkInDate": "2024-02-23T00:00:00",
      "checkOutDate": "2024-02-23T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "gogonishka",
      "customerId": "Deluxe Twin Room",
      "customerPhone": "457654321"
    },
    {
      "id": 238,
      "roomID": 5,
      "checkInDate": "2024-02-24T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "susanchik",
      "customerId": null,
      "customerPhone": "7865432"
    },
    {
      "id": 239,
      "roomID": 5,
      "checkInDate": "2024-02-25T00:00:00",
      "checkOutDate": "2024-02-26T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "sopfo",
      "customerId": null,
      "customerPhone": "767654321"
    },
    {
      "id": 240,
      "roomID": 5,
      "checkInDate": "2024-02-27T00:00:00",
      "checkOutDate": "2024-02-28T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "fanico",
      "customerId": null,
      "customerPhone": "7865432"
    },
    {
      "id": 241,
      "roomID": 5,
      "checkInDate": "2024-02-28T00:00:00",
      "checkOutDate": "2024-02-29T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "qalo",
      "customerId": null,
      "customerPhone": "8765432"
    },
    {
      "id": 242,
      "roomID": 1,
      "checkInDate": "2024-02-29T00:00:00",
      "checkOutDate": "2024-02-29T00:00:00",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "fanoni",
      "customerId": null,
      "customerPhone": "543456678"
    },
    {
      "id": 243,
      "roomID": 1,
      "checkInDate": "2024-02-23T13:23:03.525",
      "checkOutDate": "2024-02-23T13:23:03.525",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 244,
      "roomID": 5,
      "checkInDate": "2024-03-01T00:00:00",
      "checkOutDate": "2024-03-02T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "fancula",
      "customerId": null,
      "customerPhone": "76543267"
    },
    {
      "id": 245,
      "roomID": 5,
      "checkInDate": "2024-03-03T00:00:00",
      "checkOutDate": "2024-03-04T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "suswiwaki",
      "customerId": null,
      "customerPhone": "76544321"
    },
    {
      "id": 246,
      "roomID": 1,
      "checkInDate": "2024-03-03T00:00:00",
      "checkOutDate": "2024-03-04T00:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "gogebebi8",
      "customerId": null,
      "customerPhone": "76543211"
    },
    {
      "id": 247,
      "roomID": 3,
      "checkInDate": "2024-03-04T00:00:00",
      "checkOutDate": "2024-03-05T00:00:00",
      "totalPrice": 89,
      "isConfirmed": true,
      "customerName": "gucfic",
      "customerId": null,
      "customerPhone": "654326"
    },
    {
      "id": 248,
      "roomID": 3,
      "checkInDate": "2024-03-08T00:00:00",
      "checkOutDate": "2024-03-09T00:00:00",
      "totalPrice": 89,
      "isConfirmed": true,
      "customerName": "vaso",
      "customerId": "",
      "customerPhone": "5432345"
    },
    {
      "id": 249,
      "roomID": 1,
      "checkInDate": "2024-02-23T20:11:48.297",
      "checkOutDate": "2024-02-23T20:11:48.297",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    },
    {
      "id": 250,
      "roomID": 5,
      "checkInDate": "2024-03-06T00:00:00",
      "checkOutDate": "2024-03-07T00:00:00",
      "totalPrice": 99,
      "isConfirmed": true,
      "customerName": "fansav",
      "customerId": "",
      "customerPhone": "6544321"
    },
    {
      "id": 251,
      "roomID": 7,
      "checkInDate": "2024-02-24T00:00:00",
      "checkOutDate": "2024-02-25T00:00:00",
      "totalPrice": 299,
      "isConfirmed": true,
      "customerName": "lokokoina",
      "customerId": "",
      "customerPhone": "777656565"
    },
    {
      "id": 252,
      "roomID": 7,
      "checkInDate": "2024-02-26T00:00:00",
      "checkOutDate": "2024-02-27T00:00:00",
      "totalPrice": 299,
      "isConfirmed": true,
      "customerName": "foroxa",
      "customerId": "",
      "customerPhone": "6546786543"
    },
    {
      "id": 253,
      "roomID": 7,
      "checkInDate": "2024-02-28T00:00:00",
      "checkOutDate": "2024-02-29T00:00:00",
      "totalPrice": 299,
      "isConfirmed": true,
      "customerName": "xornichni",
      "customerId": "",
      "customerPhone": "7676767"
    },
    {
      "id": 254,
      "roomID": 7,
      "checkInDate": "2024-02-29T00:00:00",
      "checkOutDate": "2024-03-01T00:00:00",
      "totalPrice": 299,
      "isConfirmed": true,
      "customerName": "fonijo",
      "customerId": "",
      "customerPhone": "654321"
    },
    {
      "id": 255,
      "roomID": 1,
      "checkInDate": "2024-02-23T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "goori",
      "customerId": "",
      "customerPhone": "7655433"
    },
    {
      "id": 256,
      "roomID": 1,
      "checkInDate": "2024-03-13T00:00:00",
      "checkOutDate": "2024-03-14T00:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "xaniko",
      "customerId": "",
      "customerPhone": "8765887776"
    },
    {
      "id": 257,
      "roomID": 1,
      "checkInDate": "2024-03-11T00:00:00",
      "checkOutDate": "2024-03-12T00:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "fdfdfd",
      "customerId": "",
      "customerPhone": "6547543"
    },
    {
      "id": 258,
      "roomID": 7,
      "checkInDate": "2024-03-24T00:00:00",
      "checkOutDate": "2024-03-31T00:00:00",
      "totalPrice": 2093,
      "isConfirmed": true,
      "customerName": "lizikoo",
      "customerId": "",
      "customerPhone": "567897765"
    },
    {
      "id": 259,
      "roomID": 1,
      "checkInDate": "2024-03-14T00:00:00",
      "checkOutDate": "2024-03-15T00:00:00",
      "totalPrice": 199,
      "isConfirmed": true,
      "customerName": "honi",
      "customerId": "",
      "customerPhone": "boni"
    },
    {
      "id": 260,
      "roomID": 8,
      "checkInDate": "2024-02-23T00:00:00",
      "checkOutDate": "2024-02-24T00:00:00",
      "totalPrice": 299,
      "isConfirmed": true,
      "customerName": "gogo",
      "customerId": "",
      "customerPhone": "12345656"
    },
    {
      "id": 261,
      "roomID": 4,
      "checkInDate": "2024-02-25T00:00:00",
      "checkOutDate": "2024-02-26T00:00:00",
      "totalPrice": 189,
      "isConfirmed": true,
      "customerName": "garniri",
      "customerId": "",
      "customerPhone": "755544"
    }
  ]

  [
    {
      "id": 1,
      "name": "The Biltmore Hotel Tbilisi",
      "address": "29 Rustaveli Ave, Tbilisi, Tbilisi, 0108",
      "city": "Tbilisi",
      "featuredImage": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/41cbdcb1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "rooms": []
    },
    {
      "id": 2,
      "name": "Courtyard by Marriott Tbilisi",
      "address": "4, Freedom Square, Tbilisi, 0105",
      "city": "Tbilisi",
      "featuredImage": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/3e65a896.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "rooms": []
    },
    {
      "id": 3,
      "name": "Radisson Blu Iveria Hotel Tbilisi",
      "address": "1 Republic square, Tbilisi, 0108",
      "city": "Tbilisi",
      "featuredImage": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/84d23097.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "rooms": []
    }
  ]

  [
    {
      "id": 0,
      "name": "string",
      "address": "string",
      "city": "string",
      "featuredImage": "string",
      "rooms": [
        {
          "id": 0,
          "name": "string",
          "hotelId": 0,
          "roomTypeId": 0,
          "pricePerNight": 0,
          "available": true,
          "maximumGuests": 0,
          "bookedDates": [
            {
              "id": 0,
              "date": "2024-02-24T10:04:27.295Z",
              "roomId": 0
            }
          ],
          "images": [
            {
              "id": 0,
              "source": "string",
              "roomId": 0
            }
          ]
        }
      ]
    }
  ]

  [
    {
      "id": 1,
      "name": "Premium Room",
      "hotelId": 1,
      "pricePerNight": 199,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 1,
      "bookedDates": [
        {
          "id": 270,
          "date": "2023-12-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 722,
          "date": "2024-02-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 723,
          "date": "2024-02-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 724,
          "date": "2024-02-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 725,
          "date": "2024-02-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 726,
          "date": "2024-02-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 727,
          "date": "2024-02-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 728,
          "date": "2024-02-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 729,
          "date": "2024-02-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 730,
          "date": "2024-02-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 731,
          "date": "2024-02-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 732,
          "date": "2024-02-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 733,
          "date": "2024-02-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 734,
          "date": "2024-02-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 735,
          "date": "2024-02-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 744,
          "date": "2024-02-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 745,
          "date": "2024-02-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 854,
          "date": "2023-12-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 960,
          "date": "2024-02-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 961,
          "date": "2024-02-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 962,
          "date": "2024-02-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 994,
          "date": "2024-03-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 995,
          "date": "2024-03-24T00:00:00",
          "roomId": 1
        },
        {
          "id": 996,
          "date": "2024-03-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 997,
          "date": "2024-03-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 998,
          "date": "2024-03-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 999,
          "date": "2024-03-28T00:00:00",
          "roomId": 1
        },
        {
          "id": 1000,
          "date": "2024-03-29T00:00:00",
          "roomId": 1
        },
        {
          "id": 1001,
          "date": "2024-03-30T00:00:00",
          "roomId": 1
        },
        {
          "id": 1002,
          "date": "2024-03-31T00:00:00",
          "roomId": 1
        },
        {
          "id": 1003,
          "date": "2024-04-01T00:00:00",
          "roomId": 1
        },
        {
          "id": 1004,
          "date": "2024-04-02T00:00:00",
          "roomId": 1
        },
        {
          "id": 1005,
          "date": "2024-04-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1006,
          "date": "2024-04-04T00:00:00",
          "roomId": 1
        },
        {
          "id": 1007,
          "date": "2024-04-05T00:00:00",
          "roomId": 1
        },
        {
          "id": 1008,
          "date": "2024-04-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 1009,
          "date": "2024-04-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 1010,
          "date": "2024-04-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 1011,
          "date": "2024-04-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 1012,
          "date": "2024-04-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 1013,
          "date": "2024-04-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1014,
          "date": "2024-04-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 1015,
          "date": "2024-04-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1016,
          "date": "2024-04-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 1017,
          "date": "2024-04-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 1018,
          "date": "2024-04-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 1019,
          "date": "2024-04-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 1020,
          "date": "2024-04-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 1021,
          "date": "2024-04-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 1022,
          "date": "2024-04-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 1023,
          "date": "2024-04-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 1024,
          "date": "2024-04-22T00:00:00",
          "roomId": 1
        },
        {
          "id": 1025,
          "date": "2024-04-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 1026,
          "date": "2024-04-24T00:00:00",
          "roomId": 1
        },
        {
          "id": 1027,
          "date": "2024-04-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 1028,
          "date": "2024-04-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 1029,
          "date": "2024-04-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 1030,
          "date": "2024-04-28T00:00:00",
          "roomId": 1
        },
        {
          "id": 1031,
          "date": "2024-04-29T00:00:00",
          "roomId": 1
        },
        {
          "id": 1032,
          "date": "2024-04-30T00:00:00",
          "roomId": 1
        },
        {
          "id": 1033,
          "date": "2024-05-01T00:00:00",
          "roomId": 1
        },
        {
          "id": 1034,
          "date": "2024-05-02T00:00:00",
          "roomId": 1
        },
        {
          "id": 1035,
          "date": "2024-05-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1036,
          "date": "2024-05-04T00:00:00",
          "roomId": 1
        },
        {
          "id": 1037,
          "date": "2024-05-05T00:00:00",
          "roomId": 1
        },
        {
          "id": 1038,
          "date": "2024-05-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 1039,
          "date": "2024-05-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 1040,
          "date": "2024-05-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 1041,
          "date": "2024-05-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 1042,
          "date": "2024-05-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 1043,
          "date": "2024-05-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1044,
          "date": "2024-05-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 1045,
          "date": "2024-05-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1046,
          "date": "2024-05-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 1047,
          "date": "2024-05-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 1048,
          "date": "2024-05-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 1049,
          "date": "2024-05-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 1050,
          "date": "2024-05-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 1051,
          "date": "2024-05-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 1052,
          "date": "2024-05-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 1053,
          "date": "2024-05-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 1054,
          "date": "2024-05-22T00:00:00",
          "roomId": 1
        },
        {
          "id": 1055,
          "date": "2024-05-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 1056,
          "date": "2024-05-24T00:00:00",
          "roomId": 1
        },
        {
          "id": 1057,
          "date": "2024-05-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 1058,
          "date": "2024-05-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 1059,
          "date": "2024-05-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 1060,
          "date": "2024-05-28T00:00:00",
          "roomId": 1
        },
        {
          "id": 1061,
          "date": "2024-05-29T00:00:00",
          "roomId": 1
        },
        {
          "id": 1062,
          "date": "2024-05-30T00:00:00",
          "roomId": 1
        },
        {
          "id": 1063,
          "date": "2024-05-31T00:00:00",
          "roomId": 1
        },
        {
          "id": 1064,
          "date": "2024-06-01T00:00:00",
          "roomId": 1
        },
        {
          "id": 1065,
          "date": "2024-06-02T00:00:00",
          "roomId": 1
        },
        {
          "id": 1066,
          "date": "2024-06-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1067,
          "date": "2024-06-04T00:00:00",
          "roomId": 1
        },
        {
          "id": 1068,
          "date": "2024-06-05T00:00:00",
          "roomId": 1
        },
        {
          "id": 1069,
          "date": "2024-06-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 1070,
          "date": "2024-06-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 1071,
          "date": "2024-06-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 1072,
          "date": "2024-06-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 1073,
          "date": "2024-06-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 1074,
          "date": "2024-06-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1075,
          "date": "2024-06-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 1076,
          "date": "2024-06-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1077,
          "date": "2024-06-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 1078,
          "date": "2024-06-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 1079,
          "date": "2024-06-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 1080,
          "date": "2024-06-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 1081,
          "date": "2024-06-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 1082,
          "date": "2024-06-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 1083,
          "date": "2024-06-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 1084,
          "date": "2024-06-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 1085,
          "date": "2024-06-22T00:00:00",
          "roomId": 1
        },
        {
          "id": 1086,
          "date": "2024-06-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 1087,
          "date": "2024-06-24T00:00:00",
          "roomId": 1
        },
        {
          "id": 1088,
          "date": "2024-06-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 1089,
          "date": "2024-06-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 1090,
          "date": "2024-06-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 1091,
          "date": "2024-06-28T00:00:00",
          "roomId": 1
        },
        {
          "id": 1092,
          "date": "2024-06-29T00:00:00",
          "roomId": 1
        },
        {
          "id": 1093,
          "date": "2024-06-30T00:00:00",
          "roomId": 1
        },
        {
          "id": 1094,
          "date": "2024-07-01T00:00:00",
          "roomId": 1
        },
        {
          "id": 1095,
          "date": "2024-07-02T00:00:00",
          "roomId": 1
        },
        {
          "id": 1096,
          "date": "2024-07-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1097,
          "date": "2024-07-04T00:00:00",
          "roomId": 1
        },
        {
          "id": 1098,
          "date": "2024-07-05T00:00:00",
          "roomId": 1
        },
        {
          "id": 1099,
          "date": "2024-07-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 1100,
          "date": "2024-07-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 1101,
          "date": "2024-07-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 1102,
          "date": "2024-07-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 1103,
          "date": "2024-07-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 1104,
          "date": "2024-07-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1105,
          "date": "2024-07-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 1106,
          "date": "2024-07-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1107,
          "date": "2024-07-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 1108,
          "date": "2024-07-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 1109,
          "date": "2024-07-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 1110,
          "date": "2024-07-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 1111,
          "date": "2024-07-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 1112,
          "date": "2024-07-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 1113,
          "date": "2024-07-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 1114,
          "date": "2024-07-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 1115,
          "date": "2024-07-22T00:00:00",
          "roomId": 1
        },
        {
          "id": 1116,
          "date": "2024-07-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 1117,
          "date": "2024-07-24T00:00:00",
          "roomId": 1
        },
        {
          "id": 1118,
          "date": "2024-07-25T00:00:00",
          "roomId": 1
        },
        {
          "id": 1119,
          "date": "2024-07-26T00:00:00",
          "roomId": 1
        },
        {
          "id": 1120,
          "date": "2024-07-27T00:00:00",
          "roomId": 1
        },
        {
          "id": 1121,
          "date": "2024-07-28T00:00:00",
          "roomId": 1
        },
        {
          "id": 1122,
          "date": "2024-07-29T00:00:00",
          "roomId": 1
        },
        {
          "id": 1123,
          "date": "2024-07-30T00:00:00",
          "roomId": 1
        },
        {
          "id": 1124,
          "date": "2024-07-31T00:00:00",
          "roomId": 1
        },
        {
          "id": 1125,
          "date": "2024-08-01T00:00:00",
          "roomId": 1
        },
        {
          "id": 1126,
          "date": "2024-08-02T00:00:00",
          "roomId": 1
        },
        {
          "id": 1127,
          "date": "2024-08-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1128,
          "date": "2024-08-04T00:00:00",
          "roomId": 1
        },
        {
          "id": 1129,
          "date": "2024-08-05T00:00:00",
          "roomId": 1
        },
        {
          "id": 1130,
          "date": "2024-08-06T00:00:00",
          "roomId": 1
        },
        {
          "id": 1131,
          "date": "2024-08-07T00:00:00",
          "roomId": 1
        },
        {
          "id": 1132,
          "date": "2024-08-08T00:00:00",
          "roomId": 1
        },
        {
          "id": 1133,
          "date": "2024-08-09T00:00:00",
          "roomId": 1
        },
        {
          "id": 1134,
          "date": "2024-08-10T00:00:00",
          "roomId": 1
        },
        {
          "id": 1135,
          "date": "2024-08-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1136,
          "date": "2024-08-12T00:00:00",
          "roomId": 1
        },
        {
          "id": 1137,
          "date": "2024-08-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1138,
          "date": "2024-08-14T00:00:00",
          "roomId": 1
        },
        {
          "id": 1139,
          "date": "2024-08-15T00:00:00",
          "roomId": 1
        },
        {
          "id": 1140,
          "date": "2024-08-16T00:00:00",
          "roomId": 1
        },
        {
          "id": 1141,
          "date": "2024-08-17T00:00:00",
          "roomId": 1
        },
        {
          "id": 1142,
          "date": "2024-08-18T00:00:00",
          "roomId": 1
        },
        {
          "id": 1143,
          "date": "2024-08-19T00:00:00",
          "roomId": 1
        },
        {
          "id": 1144,
          "date": "2024-08-20T00:00:00",
          "roomId": 1
        },
        {
          "id": 1145,
          "date": "2024-08-21T00:00:00",
          "roomId": 1
        },
        {
          "id": 1146,
          "date": "2024-08-22T00:00:00",
          "roomId": 1
        },
        {
          "id": 1152,
          "date": "2024-03-03T00:00:00",
          "roomId": 1
        },
        {
          "id": 1160,
          "date": "2024-02-23T00:00:00",
          "roomId": 1
        },
        {
          "id": 1161,
          "date": "2024-03-13T00:00:00",
          "roomId": 1
        },
        {
          "id": 1162,
          "date": "2024-03-11T00:00:00",
          "roomId": 1
        },
        {
          "id": 1170,
          "date": "2024-03-14T00:00:00",
          "roomId": 1
        }
      ],
      "images": [
        {
          "id": 1,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/78e5bc5d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        },
        {
          "id": 2,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/bf815e90.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        },
        {
          "id": 3,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        },
        {
          "id": 4,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d9add37c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        },
        {
          "id": 5,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/11ed224a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        },
        {
          "id": 6,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/1f20a362.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "Deluxe Twin Room",
      "hotelId": 1,
      "pricePerNight": 299,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 416,
          "date": "2024-02-12T00:00:00",
          "roomId": 2
        },
        {
          "id": 506,
          "date": "2024-02-12T00:00:00",
          "roomId": 2
        },
        {
          "id": 507,
          "date": "2024-02-13T00:00:00",
          "roomId": 2
        },
        {
          "id": 508,
          "date": "2024-02-14T00:00:00",
          "roomId": 2
        },
        {
          "id": 509,
          "date": "2024-02-15T00:00:00",
          "roomId": 2
        },
        {
          "id": 510,
          "date": "2024-02-16T00:00:00",
          "roomId": 2
        },
        {
          "id": 511,
          "date": "2024-02-17T00:00:00",
          "roomId": 2
        },
        {
          "id": 512,
          "date": "2024-02-18T00:00:00",
          "roomId": 2
        },
        {
          "id": 513,
          "date": "2024-02-19T00:00:00",
          "roomId": 2
        },
        {
          "id": 514,
          "date": "2024-02-20T00:00:00",
          "roomId": 2
        },
        {
          "id": 515,
          "date": "2024-02-21T00:00:00",
          "roomId": 2
        },
        {
          "id": 516,
          "date": "2024-02-22T00:00:00",
          "roomId": 2
        },
        {
          "id": 517,
          "date": "2024-02-23T00:00:00",
          "roomId": 2
        },
        {
          "id": 518,
          "date": "2024-02-24T00:00:00",
          "roomId": 2
        },
        {
          "id": 519,
          "date": "2024-02-25T00:00:00",
          "roomId": 2
        },
        {
          "id": 520,
          "date": "2024-02-26T00:00:00",
          "roomId": 2
        },
        {
          "id": 521,
          "date": "2024-02-27T00:00:00",
          "roomId": 2
        },
        {
          "id": 522,
          "date": "2024-02-28T00:00:00",
          "roomId": 2
        },
        {
          "id": 523,
          "date": "2024-02-29T00:00:00",
          "roomId": 2
        },
        {
          "id": 524,
          "date": "2024-03-01T00:00:00",
          "roomId": 2
        },
        {
          "id": 525,
          "date": "2024-03-02T00:00:00",
          "roomId": 2
        },
        {
          "id": 526,
          "date": "2024-03-03T00:00:00",
          "roomId": 2
        },
        {
          "id": 527,
          "date": "2024-03-04T00:00:00",
          "roomId": 2
        },
        {
          "id": 528,
          "date": "2024-03-05T00:00:00",
          "roomId": 2
        },
        {
          "id": 529,
          "date": "2024-03-06T00:00:00",
          "roomId": 2
        },
        {
          "id": 530,
          "date": "2024-03-07T00:00:00",
          "roomId": 2
        },
        {
          "id": 531,
          "date": "2024-03-08T00:00:00",
          "roomId": 2
        },
        {
          "id": 532,
          "date": "2024-03-09T00:00:00",
          "roomId": 2
        },
        {
          "id": 533,
          "date": "2024-03-10T00:00:00",
          "roomId": 2
        },
        {
          "id": 534,
          "date": "2024-03-11T00:00:00",
          "roomId": 2
        },
        {
          "id": 535,
          "date": "2024-03-12T00:00:00",
          "roomId": 2
        },
        {
          "id": 536,
          "date": "2024-03-13T00:00:00",
          "roomId": 2
        },
        {
          "id": 537,
          "date": "2024-03-14T00:00:00",
          "roomId": 2
        },
        {
          "id": 538,
          "date": "2024-03-15T00:00:00",
          "roomId": 2
        },
        {
          "id": 539,
          "date": "2024-03-16T00:00:00",
          "roomId": 2
        },
        {
          "id": 540,
          "date": "2024-03-17T00:00:00",
          "roomId": 2
        },
        {
          "id": 541,
          "date": "2024-03-18T00:00:00",
          "roomId": 2
        },
        {
          "id": 542,
          "date": "2024-03-19T00:00:00",
          "roomId": 2
        },
        {
          "id": 543,
          "date": "2024-03-20T00:00:00",
          "roomId": 2
        },
        {
          "id": 544,
          "date": "2024-03-21T00:00:00",
          "roomId": 2
        },
        {
          "id": 545,
          "date": "2024-03-22T00:00:00",
          "roomId": 2
        },
        {
          "id": 546,
          "date": "2024-03-23T00:00:00",
          "roomId": 2
        },
        {
          "id": 547,
          "date": "2024-03-24T00:00:00",
          "roomId": 2
        },
        {
          "id": 548,
          "date": "2024-03-25T00:00:00",
          "roomId": 2
        },
        {
          "id": 549,
          "date": "2024-03-26T00:00:00",
          "roomId": 2
        },
        {
          "id": 550,
          "date": "2024-03-27T00:00:00",
          "roomId": 2
        },
        {
          "id": 551,
          "date": "2024-03-28T00:00:00",
          "roomId": 2
        },
        {
          "id": 552,
          "date": "2024-03-29T00:00:00",
          "roomId": 2
        },
        {
          "id": 553,
          "date": "2024-03-30T00:00:00",
          "roomId": 2
        },
        {
          "id": 554,
          "date": "2024-03-31T00:00:00",
          "roomId": 2
        },
        {
          "id": 555,
          "date": "2024-04-01T00:00:00",
          "roomId": 2
        },
        {
          "id": 556,
          "date": "2024-04-02T00:00:00",
          "roomId": 2
        },
        {
          "id": 557,
          "date": "2024-04-03T00:00:00",
          "roomId": 2
        },
        {
          "id": 558,
          "date": "2024-04-04T00:00:00",
          "roomId": 2
        },
        {
          "id": 559,
          "date": "2024-04-05T00:00:00",
          "roomId": 2
        },
        {
          "id": 560,
          "date": "2024-04-06T00:00:00",
          "roomId": 2
        },
        {
          "id": 561,
          "date": "2024-04-07T00:00:00",
          "roomId": 2
        },
        {
          "id": 562,
          "date": "2024-04-08T00:00:00",
          "roomId": 2
        },
        {
          "id": 563,
          "date": "2024-04-09T00:00:00",
          "roomId": 2
        },
        {
          "id": 564,
          "date": "2024-04-10T00:00:00",
          "roomId": 2
        },
        {
          "id": 565,
          "date": "2024-04-11T00:00:00",
          "roomId": 2
        },
        {
          "id": 566,
          "date": "2024-04-12T00:00:00",
          "roomId": 2
        },
        {
          "id": 567,
          "date": "2024-04-13T00:00:00",
          "roomId": 2
        },
        {
          "id": 568,
          "date": "2024-04-14T00:00:00",
          "roomId": 2
        },
        {
          "id": 569,
          "date": "2024-04-15T00:00:00",
          "roomId": 2
        },
        {
          "id": 570,
          "date": "2024-04-16T00:00:00",
          "roomId": 2
        },
        {
          "id": 571,
          "date": "2024-04-17T00:00:00",
          "roomId": 2
        },
        {
          "id": 572,
          "date": "2024-04-18T00:00:00",
          "roomId": 2
        },
        {
          "id": 573,
          "date": "2024-04-19T00:00:00",
          "roomId": 2
        },
        {
          "id": 574,
          "date": "2024-04-20T00:00:00",
          "roomId": 2
        },
        {
          "id": 575,
          "date": "2024-04-21T00:00:00",
          "roomId": 2
        },
        {
          "id": 576,
          "date": "2024-04-22T00:00:00",
          "roomId": 2
        },
        {
          "id": 577,
          "date": "2024-04-23T00:00:00",
          "roomId": 2
        },
        {
          "id": 578,
          "date": "2024-04-24T00:00:00",
          "roomId": 2
        },
        {
          "id": 579,
          "date": "2024-04-25T00:00:00",
          "roomId": 2
        },
        {
          "id": 580,
          "date": "2024-04-26T00:00:00",
          "roomId": 2
        },
        {
          "id": 581,
          "date": "2024-04-27T00:00:00",
          "roomId": 2
        },
        {
          "id": 582,
          "date": "2024-04-28T00:00:00",
          "roomId": 2
        },
        {
          "id": 583,
          "date": "2024-04-29T00:00:00",
          "roomId": 2
        },
        {
          "id": 584,
          "date": "2024-04-30T00:00:00",
          "roomId": 2
        },
        {
          "id": 585,
          "date": "2024-05-01T00:00:00",
          "roomId": 2
        },
        {
          "id": 586,
          "date": "2024-05-02T00:00:00",
          "roomId": 2
        },
        {
          "id": 587,
          "date": "2024-05-03T00:00:00",
          "roomId": 2
        },
        {
          "id": 588,
          "date": "2024-05-04T00:00:00",
          "roomId": 2
        },
        {
          "id": 589,
          "date": "2024-05-05T00:00:00",
          "roomId": 2
        },
        {
          "id": 590,
          "date": "2024-05-06T00:00:00",
          "roomId": 2
        },
        {
          "id": 591,
          "date": "2024-05-07T00:00:00",
          "roomId": 2
        },
        {
          "id": 592,
          "date": "2024-05-08T00:00:00",
          "roomId": 2
        },
        {
          "id": 593,
          "date": "2024-05-09T00:00:00",
          "roomId": 2
        },
        {
          "id": 594,
          "date": "2024-05-10T00:00:00",
          "roomId": 2
        },
        {
          "id": 595,
          "date": "2024-05-11T00:00:00",
          "roomId": 2
        },
        {
          "id": 852,
          "date": "2024-02-08T00:00:00",
          "roomId": 2
        },
        {
          "id": 963,
          "date": "2024-05-23T00:00:00",
          "roomId": 2
        },
        {
          "id": 964,
          "date": "2024-05-24T00:00:00",
          "roomId": 2
        },
        {
          "id": 965,
          "date": "2024-05-25T00:00:00",
          "roomId": 2
        },
        {
          "id": 966,
          "date": "2024-05-26T00:00:00",
          "roomId": 2
        },
        {
          "id": 967,
          "date": "2024-05-27T00:00:00",
          "roomId": 2
        },
        {
          "id": 968,
          "date": "2024-05-28T00:00:00",
          "roomId": 2
        },
        {
          "id": 969,
          "date": "2024-05-29T00:00:00",
          "roomId": 2
        },
        {
          "id": 970,
          "date": "2024-05-30T00:00:00",
          "roomId": 2
        },
        {
          "id": 971,
          "date": "2024-05-31T00:00:00",
          "roomId": 2
        },
        {
          "id": 972,
          "date": "2024-06-01T00:00:00",
          "roomId": 2
        },
        {
          "id": 973,
          "date": "2024-06-02T00:00:00",
          "roomId": 2
        },
        {
          "id": 974,
          "date": "2024-06-03T00:00:00",
          "roomId": 2
        },
        {
          "id": 975,
          "date": "2024-06-04T00:00:00",
          "roomId": 2
        },
        {
          "id": 976,
          "date": "2024-06-05T00:00:00",
          "roomId": 2
        },
        {
          "id": 977,
          "date": "2024-06-06T00:00:00",
          "roomId": 2
        },
        {
          "id": 978,
          "date": "2024-06-07T00:00:00",
          "roomId": 2
        },
        {
          "id": 979,
          "date": "2024-06-08T00:00:00",
          "roomId": 2
        },
        {
          "id": 980,
          "date": "2024-06-09T00:00:00",
          "roomId": 2
        },
        {
          "id": 981,
          "date": "2024-06-10T00:00:00",
          "roomId": 2
        },
        {
          "id": 982,
          "date": "2024-06-11T00:00:00",
          "roomId": 2
        },
        {
          "id": 983,
          "date": "2024-06-12T00:00:00",
          "roomId": 2
        },
        {
          "id": 984,
          "date": "2024-06-13T00:00:00",
          "roomId": 2
        },
        {
          "id": 985,
          "date": "2024-06-14T00:00:00",
          "roomId": 2
        },
        {
          "id": 986,
          "date": "2024-06-15T00:00:00",
          "roomId": 2
        },
        {
          "id": 987,
          "date": "2024-06-16T00:00:00",
          "roomId": 2
        },
        {
          "id": 988,
          "date": "2024-06-17T00:00:00",
          "roomId": 2
        },
        {
          "id": 989,
          "date": "2024-06-18T00:00:00",
          "roomId": 2
        },
        {
          "id": 990,
          "date": "2024-06-19T00:00:00",
          "roomId": 2
        },
        {
          "id": 991,
          "date": "2024-06-20T00:00:00",
          "roomId": 2
        },
        {
          "id": 992,
          "date": "2024-06-21T00:00:00",
          "roomId": 2
        },
        {
          "id": 993,
          "date": "2024-06-22T00:00:00",
          "roomId": 2
        }
      ],
      "images": [
        {
          "id": 7,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/b6bb61fc.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        },
        {
          "id": 8,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/14b60598.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        },
        {
          "id": 9,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/99460f51.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        },
        {
          "id": 10,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/7aac5bc6.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        },
        {
          "id": 11,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/f7436d8f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        },
        {
          "id": 12,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d9add37c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 2
        }
      ]
    },
    {
      "id": 3,
      "name": "Club Room",
      "hotelId": 1,
      "pricePerNight": 89,
      "available": true,
      "maximumGuests": 2,
      "roomTypeId": 1,
      "bookedDates": [
        {
          "id": 216,
          "date": "2023-11-24T00:00:00",
          "roomId": 3
        },
        {
          "id": 686,
          "date": "2024-03-22T00:00:00",
          "roomId": 3
        },
        {
          "id": 687,
          "date": "2024-03-23T00:00:00",
          "roomId": 3
        },
        {
          "id": 688,
          "date": "2024-03-24T00:00:00",
          "roomId": 3
        },
        {
          "id": 689,
          "date": "2024-03-25T00:00:00",
          "roomId": 3
        },
        {
          "id": 690,
          "date": "2024-03-26T00:00:00",
          "roomId": 3
        },
        {
          "id": 691,
          "date": "2024-03-27T00:00:00",
          "roomId": 3
        },
        {
          "id": 692,
          "date": "2024-03-28T00:00:00",
          "roomId": 3
        },
        {
          "id": 693,
          "date": "2024-03-29T00:00:00",
          "roomId": 3
        },
        {
          "id": 694,
          "date": "2024-03-30T00:00:00",
          "roomId": 3
        },
        {
          "id": 695,
          "date": "2024-03-31T00:00:00",
          "roomId": 3
        },
        {
          "id": 696,
          "date": "2024-04-01T00:00:00",
          "roomId": 3
        },
        {
          "id": 697,
          "date": "2024-04-02T00:00:00",
          "roomId": 3
        },
        {
          "id": 698,
          "date": "2024-04-03T00:00:00",
          "roomId": 3
        },
        {
          "id": 699,
          "date": "2024-04-04T00:00:00",
          "roomId": 3
        },
        {
          "id": 700,
          "date": "2024-04-05T00:00:00",
          "roomId": 3
        },
        {
          "id": 701,
          "date": "2024-04-06T00:00:00",
          "roomId": 3
        },
        {
          "id": 702,
          "date": "2024-04-07T00:00:00",
          "roomId": 3
        },
        {
          "id": 703,
          "date": "2024-04-08T00:00:00",
          "roomId": 3
        },
        {
          "id": 704,
          "date": "2024-04-09T00:00:00",
          "roomId": 3
        },
        {
          "id": 705,
          "date": "2024-04-10T00:00:00",
          "roomId": 3
        },
        {
          "id": 706,
          "date": "2024-04-11T00:00:00",
          "roomId": 3
        },
        {
          "id": 707,
          "date": "2024-04-12T00:00:00",
          "roomId": 3
        },
        {
          "id": 708,
          "date": "2024-04-13T00:00:00",
          "roomId": 3
        },
        {
          "id": 709,
          "date": "2024-04-14T00:00:00",
          "roomId": 3
        },
        {
          "id": 710,
          "date": "2024-04-15T00:00:00",
          "roomId": 3
        },
        {
          "id": 711,
          "date": "2024-04-16T00:00:00",
          "roomId": 3
        },
        {
          "id": 712,
          "date": "2024-04-17T00:00:00",
          "roomId": 3
        },
        {
          "id": 713,
          "date": "2024-04-18T00:00:00",
          "roomId": 3
        },
        {
          "id": 714,
          "date": "2024-04-19T00:00:00",
          "roomId": 3
        },
        {
          "id": 715,
          "date": "2024-04-20T00:00:00",
          "roomId": 3
        },
        {
          "id": 716,
          "date": "2024-04-21T00:00:00",
          "roomId": 3
        },
        {
          "id": 717,
          "date": "2024-04-22T00:00:00",
          "roomId": 3
        },
        {
          "id": 718,
          "date": "2024-04-23T00:00:00",
          "roomId": 3
        },
        {
          "id": 719,
          "date": "2024-04-24T00:00:00",
          "roomId": 3
        },
        {
          "id": 720,
          "date": "2024-04-25T00:00:00",
          "roomId": 3
        },
        {
          "id": 721,
          "date": "2024-04-26T00:00:00",
          "roomId": 3
        },
        {
          "id": 736,
          "date": "2024-02-13T00:00:00",
          "roomId": 3
        },
        {
          "id": 737,
          "date": "2024-02-14T00:00:00",
          "roomId": 3
        },
        {
          "id": 738,
          "date": "2024-02-15T00:00:00",
          "roomId": 3
        },
        {
          "id": 739,
          "date": "2024-02-16T00:00:00",
          "roomId": 3
        },
        {
          "id": 740,
          "date": "2024-02-17T00:00:00",
          "roomId": 3
        },
        {
          "id": 741,
          "date": "2024-02-18T00:00:00",
          "roomId": 3
        },
        {
          "id": 742,
          "date": "2024-02-19T00:00:00",
          "roomId": 3
        },
        {
          "id": 743,
          "date": "2024-02-20T00:00:00",
          "roomId": 3
        },
        {
          "id": 772,
          "date": "2024-05-22T00:00:00",
          "roomId": 3
        },
        {
          "id": 773,
          "date": "2024-05-23T00:00:00",
          "roomId": 3
        },
        {
          "id": 774,
          "date": "2024-05-24T00:00:00",
          "roomId": 3
        },
        {
          "id": 775,
          "date": "2024-05-25T00:00:00",
          "roomId": 3
        },
        {
          "id": 776,
          "date": "2024-05-26T00:00:00",
          "roomId": 3
        },
        {
          "id": 777,
          "date": "2024-05-27T00:00:00",
          "roomId": 3
        },
        {
          "id": 778,
          "date": "2024-05-28T00:00:00",
          "roomId": 3
        },
        {
          "id": 779,
          "date": "2024-05-29T00:00:00",
          "roomId": 3
        },
        {
          "id": 780,
          "date": "2024-05-30T00:00:00",
          "roomId": 3
        },
        {
          "id": 1153,
          "date": "2024-03-04T00:00:00",
          "roomId": 3
        },
        {
          "id": 1154,
          "date": "2024-03-08T00:00:00",
          "roomId": 3
        }
      ],
      "images": [
        {
          "id": 13,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/74bb8203.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 3
        },
        {
          "id": 14,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/08619d53.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 3
        },
        {
          "id": 15,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/afdf2bac.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 3
        },
        {
          "id": 16,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 3
        },
        {
          "id": 17,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d6ca6c86.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 3
        }
      ]
    },
    {
      "id": 4,
      "name": "Deluxe Double Room",
      "hotelId": 1,
      "pricePerNight": 189,
      "available": true,
      "maximumGuests": 5,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 1172,
          "date": "2024-02-25T00:00:00",
          "roomId": 4
        }
      ],
      "images": [
        {
          "id": 18,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/14b60598.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 4
        },
        {
          "id": 19,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/74bb8203.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 4
        },
        {
          "id": 20,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d6ca6c86.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 4
        },
        {
          "id": 21,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/78e5bc5d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 4
        },
        {
          "id": 22,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/8eb86ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 4
        }
      ]
    },
    {
      "id": 5,
      "name": "Junior Suite",
      "hotelId": 1,
      "pricePerNight": 99,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 1,
      "bookedDates": [
        {
          "id": 890,
          "date": "2024-01-03T00:00:00",
          "roomId": 5
        },
        {
          "id": 1147,
          "date": "2024-02-25T00:00:00",
          "roomId": 5
        },
        {
          "id": 1148,
          "date": "2024-02-27T00:00:00",
          "roomId": 5
        },
        {
          "id": 1149,
          "date": "2024-02-28T00:00:00",
          "roomId": 5
        },
        {
          "id": 1150,
          "date": "2024-03-01T00:00:00",
          "roomId": 5
        },
        {
          "id": 1151,
          "date": "2024-03-03T00:00:00",
          "roomId": 5
        },
        {
          "id": 1155,
          "date": "2024-03-06T00:00:00",
          "roomId": 5
        }
      ],
      "images": [
        {
          "id": 23,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 5
        },
        {
          "id": 24,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/bf815e90.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 5
        },
        {
          "id": 25,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/7aac5bc6.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 5
        },
        {
          "id": 26,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d6ca6c86.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 5
        }
      ]
    },
    {
      "id": 6,
      "name": "Club Twin Room",
      "hotelId": 1,
      "pricePerNight": 199,
      "available": true,
      "maximumGuests": 2,
      "roomTypeId": 2,
      "bookedDates": [],
      "images": [
        {
          "id": 27,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/14b60598.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 6
        },
        {
          "id": 28,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/f7436d8f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 6
        },
        {
          "id": 29,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/99460f51.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 6
        },
        {
          "id": 30,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d9add37c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 6
        }
      ]
    },
    {
      "id": 7,
      "name": "Grand Deluxe Suite",
      "hotelId": 1,
      "pricePerNight": 299,
      "available": true,
      "maximumGuests": 6,
      "roomTypeId": 3,
      "bookedDates": [
        {
          "id": 1156,
          "date": "2024-02-24T00:00:00",
          "roomId": 7
        },
        {
          "id": 1157,
          "date": "2024-02-26T00:00:00",
          "roomId": 7
        },
        {
          "id": 1158,
          "date": "2024-02-28T00:00:00",
          "roomId": 7
        },
        {
          "id": 1159,
          "date": "2024-02-29T00:00:00",
          "roomId": 7
        },
        {
          "id": 1163,
          "date": "2024-03-24T00:00:00",
          "roomId": 7
        },
        {
          "id": 1164,
          "date": "2024-03-25T00:00:00",
          "roomId": 7
        },
        {
          "id": 1165,
          "date": "2024-03-26T00:00:00",
          "roomId": 7
        },
        {
          "id": 1166,
          "date": "2024-03-27T00:00:00",
          "roomId": 7
        },
        {
          "id": 1167,
          "date": "2024-03-28T00:00:00",
          "roomId": 7
        },
        {
          "id": 1168,
          "date": "2024-03-29T00:00:00",
          "roomId": 7
        },
        {
          "id": 1169,
          "date": "2024-03-30T00:00:00",
          "roomId": 7
        }
      ],
      "images": [
        {
          "id": 31,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/1f20a362.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 7
        },
        {
          "id": 32,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/11ed224a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 7
        },
        {
          "id": 33,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/8eb86ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 7
        },
        {
          "id": 34,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d6ca6c86.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 7
        }
      ]
    },
    {
      "id": 8,
      "name": "Executive Suite",
      "hotelId": 1,
      "pricePerNight": 299,
      "available": true,
      "maximumGuests": 5,
      "roomTypeId": 1,
      "bookedDates": [
        {
          "id": 1171,
          "date": "2024-02-23T00:00:00",
          "roomId": 8
        }
      ],
      "images": [
        {
          "id": 35,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/d6ca6c86.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 8
        },
        {
          "id": 36,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/854cc524.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 8
        },
        {
          "id": 37,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/1f20a362.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 8
        },
        {
          "id": 38,
          "source": "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/3ac19564.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 8
        }
      ]
    },
    {
      "id": 9,
      "name": "Superior Twin Room",
      "hotelId": 2,
      "pricePerNight": 199,
      "available": true,
      "maximumGuests": 5,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 853,
          "date": "2024-02-06T00:00:00",
          "roomId": 9
        }
      ],
      "images": [
        {
          "id": 39,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 9
        },
        {
          "id": 40,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 9
        },
        {
          "id": 41,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/c3b4f65a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 9
        },
        {
          "id": 42,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/8b412d08.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 9
        },
        {
          "id": 43,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/60315e6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 9
        }
      ]
    },
    {
      "id": 10,
      "name": "Junior Suite",
      "hotelId": 2,
      "pricePerNight": 99,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 265,
          "date": "2023-12-09T00:00:00",
          "roomId": 10
        },
        {
          "id": 781,
          "date": "2024-05-06T00:00:00",
          "roomId": 10
        },
        {
          "id": 782,
          "date": "2024-05-07T00:00:00",
          "roomId": 10
        },
        {
          "id": 783,
          "date": "2024-05-08T00:00:00",
          "roomId": 10
        },
        {
          "id": 784,
          "date": "2024-05-09T00:00:00",
          "roomId": 10
        },
        {
          "id": 785,
          "date": "2024-05-10T00:00:00",
          "roomId": 10
        },
        {
          "id": 786,
          "date": "2024-05-11T00:00:00",
          "roomId": 10
        },
        {
          "id": 787,
          "date": "2024-05-12T00:00:00",
          "roomId": 10
        },
        {
          "id": 788,
          "date": "2024-05-13T00:00:00",
          "roomId": 10
        },
        {
          "id": 789,
          "date": "2024-05-14T00:00:00",
          "roomId": 10
        },
        {
          "id": 790,
          "date": "2024-05-15T00:00:00",
          "roomId": 10
        },
        {
          "id": 849,
          "date": "2024-12-14T00:00:00",
          "roomId": 10
        },
        {
          "id": 850,
          "date": "2024-12-15T00:00:00",
          "roomId": 10
        }
      ],
      "images": [
        {
          "id": 44,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/d020b03c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        },
        {
          "id": 45,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/76e3960e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        },
        {
          "id": 46,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        },
        {
          "id": 47,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        },
        {
          "id": 48,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/acd56094.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        },
        {
          "id": 49,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/11f2b0fe.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 10
        }
      ]
    },
    {
      "id": 11,
      "name": "Superior Room",
      "hotelId": 2,
      "pricePerNight": 399,
      "available": true,
      "maximumGuests": 5,
      "roomTypeId": 3,
      "bookedDates": [],
      "images": [
        {
          "id": 50,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/8715314f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        },
        {
          "id": 51,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        },
        {
          "id": 52,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        },
        {
          "id": 53,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/1b7de5ef.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        },
        {
          "id": 54,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/9c55692c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        },
        {
          "id": 55,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/11f2b0fe.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 11
        }
      ]
    },
    {
      "id": 12,
      "name": "Executive Room",
      "hotelId": 2,
      "pricePerNight": 99,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 2,
      "bookedDates": [],
      "images": [
        {
          "id": 56,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/58871759.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        },
        {
          "id": 57,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        },
        {
          "id": 58,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        },
        {
          "id": 59,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2ded8747.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        },
        {
          "id": 60,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/b437570e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        },
        {
          "id": 61,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/60315e6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 12
        }
      ]
    },
    {
      "id": 13,
      "name": "Deluxe Twin Room",
      "hotelId": 2,
      "pricePerNight": 199,
      "available": true,
      "maximumGuests": 4,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 851,
          "date": "2024-06-13T00:00:00",
          "roomId": 13
        }
      ],
      "images": [
        {
          "id": 62,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/ef867c3b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 63,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 64,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 65,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/b437570e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 66,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/60315e6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 67,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/8b412d08.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        },
        {
          "id": 68,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/ef867c3b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 13
        }
      ]
    },
    {
      "id": 14,
      "name": "Deluxe Room",
      "hotelId": 2,
      "pricePerNight": 149,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 1,
      "bookedDates": [],
      "images": [
        {
          "id": 69,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/9c55692c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        },
        {
          "id": 70,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/2e585f43.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        },
        {
          "id": 71,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/eca80ca3.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        },
        {
          "id": 72,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/b437570e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        },
        {
          "id": 73,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/60315e6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        },
        {
          "id": 74,
          "source": "https://images.trvl-media.com/lodging/1000000/920000/916400/916376/8b412d08.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 14
        }
      ]
    },
    {
      "id": 15,
      "name": "Premium Room",
      "hotelId": 3,
      "pricePerNight": 149,
      "available": true,
      "maximumGuests": 4,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 596,
          "date": "2024-02-12T00:00:00",
          "roomId": 15
        },
        {
          "id": 597,
          "date": "2024-02-13T00:00:00",
          "roomId": 15
        },
        {
          "id": 598,
          "date": "2024-02-14T00:00:00",
          "roomId": 15
        },
        {
          "id": 599,
          "date": "2024-02-15T00:00:00",
          "roomId": 15
        },
        {
          "id": 600,
          "date": "2024-02-16T00:00:00",
          "roomId": 15
        },
        {
          "id": 601,
          "date": "2024-02-17T00:00:00",
          "roomId": 15
        },
        {
          "id": 602,
          "date": "2024-02-18T00:00:00",
          "roomId": 15
        },
        {
          "id": 603,
          "date": "2024-02-19T00:00:00",
          "roomId": 15
        },
        {
          "id": 604,
          "date": "2024-02-20T00:00:00",
          "roomId": 15
        },
        {
          "id": 605,
          "date": "2024-02-21T00:00:00",
          "roomId": 15
        },
        {
          "id": 606,
          "date": "2024-02-22T00:00:00",
          "roomId": 15
        },
        {
          "id": 607,
          "date": "2024-02-23T00:00:00",
          "roomId": 15
        },
        {
          "id": 608,
          "date": "2024-02-24T00:00:00",
          "roomId": 15
        },
        {
          "id": 609,
          "date": "2024-02-25T00:00:00",
          "roomId": 15
        },
        {
          "id": 610,
          "date": "2024-02-26T00:00:00",
          "roomId": 15
        },
        {
          "id": 611,
          "date": "2024-02-27T00:00:00",
          "roomId": 15
        },
        {
          "id": 612,
          "date": "2024-02-28T00:00:00",
          "roomId": 15
        },
        {
          "id": 613,
          "date": "2024-02-29T00:00:00",
          "roomId": 15
        },
        {
          "id": 614,
          "date": "2024-03-01T00:00:00",
          "roomId": 15
        },
        {
          "id": 615,
          "date": "2024-03-02T00:00:00",
          "roomId": 15
        },
        {
          "id": 616,
          "date": "2024-03-03T00:00:00",
          "roomId": 15
        },
        {
          "id": 617,
          "date": "2024-03-04T00:00:00",
          "roomId": 15
        },
        {
          "id": 618,
          "date": "2024-03-05T00:00:00",
          "roomId": 15
        },
        {
          "id": 619,
          "date": "2024-03-06T00:00:00",
          "roomId": 15
        },
        {
          "id": 620,
          "date": "2024-03-07T00:00:00",
          "roomId": 15
        },
        {
          "id": 621,
          "date": "2024-03-08T00:00:00",
          "roomId": 15
        },
        {
          "id": 622,
          "date": "2024-03-09T00:00:00",
          "roomId": 15
        },
        {
          "id": 623,
          "date": "2024-03-10T00:00:00",
          "roomId": 15
        },
        {
          "id": 624,
          "date": "2024-03-11T00:00:00",
          "roomId": 15
        },
        {
          "id": 625,
          "date": "2024-03-12T00:00:00",
          "roomId": 15
        },
        {
          "id": 626,
          "date": "2024-03-13T00:00:00",
          "roomId": 15
        },
        {
          "id": 627,
          "date": "2024-03-14T00:00:00",
          "roomId": 15
        },
        {
          "id": 628,
          "date": "2024-03-15T00:00:00",
          "roomId": 15
        },
        {
          "id": 629,
          "date": "2024-03-16T00:00:00",
          "roomId": 15
        },
        {
          "id": 630,
          "date": "2024-03-17T00:00:00",
          "roomId": 15
        },
        {
          "id": 631,
          "date": "2024-03-18T00:00:00",
          "roomId": 15
        },
        {
          "id": 632,
          "date": "2024-03-19T00:00:00",
          "roomId": 15
        },
        {
          "id": 633,
          "date": "2024-03-20T00:00:00",
          "roomId": 15
        },
        {
          "id": 634,
          "date": "2024-03-21T00:00:00",
          "roomId": 15
        },
        {
          "id": 635,
          "date": "2024-03-22T00:00:00",
          "roomId": 15
        },
        {
          "id": 636,
          "date": "2024-03-23T00:00:00",
          "roomId": 15
        },
        {
          "id": 637,
          "date": "2024-03-24T00:00:00",
          "roomId": 15
        },
        {
          "id": 638,
          "date": "2024-03-25T00:00:00",
          "roomId": 15
        },
        {
          "id": 639,
          "date": "2024-03-26T00:00:00",
          "roomId": 15
        },
        {
          "id": 640,
          "date": "2024-03-27T00:00:00",
          "roomId": 15
        },
        {
          "id": 641,
          "date": "2024-03-28T00:00:00",
          "roomId": 15
        },
        {
          "id": 642,
          "date": "2024-03-29T00:00:00",
          "roomId": 15
        },
        {
          "id": 643,
          "date": "2024-03-30T00:00:00",
          "roomId": 15
        },
        {
          "id": 644,
          "date": "2024-03-31T00:00:00",
          "roomId": 15
        },
        {
          "id": 645,
          "date": "2024-04-01T00:00:00",
          "roomId": 15
        },
        {
          "id": 646,
          "date": "2024-04-02T00:00:00",
          "roomId": 15
        },
        {
          "id": 647,
          "date": "2024-04-03T00:00:00",
          "roomId": 15
        },
        {
          "id": 648,
          "date": "2024-04-04T00:00:00",
          "roomId": 15
        },
        {
          "id": 649,
          "date": "2024-04-05T00:00:00",
          "roomId": 15
        },
        {
          "id": 650,
          "date": "2024-04-06T00:00:00",
          "roomId": 15
        },
        {
          "id": 651,
          "date": "2024-04-07T00:00:00",
          "roomId": 15
        },
        {
          "id": 652,
          "date": "2024-04-08T00:00:00",
          "roomId": 15
        },
        {
          "id": 653,
          "date": "2024-04-09T00:00:00",
          "roomId": 15
        },
        {
          "id": 654,
          "date": "2024-04-10T00:00:00",
          "roomId": 15
        },
        {
          "id": 655,
          "date": "2024-04-11T00:00:00",
          "roomId": 15
        },
        {
          "id": 656,
          "date": "2024-04-12T00:00:00",
          "roomId": 15
        },
        {
          "id": 657,
          "date": "2024-04-13T00:00:00",
          "roomId": 15
        },
        {
          "id": 658,
          "date": "2024-04-14T00:00:00",
          "roomId": 15
        },
        {
          "id": 659,
          "date": "2024-04-15T00:00:00",
          "roomId": 15
        },
        {
          "id": 660,
          "date": "2024-04-16T00:00:00",
          "roomId": 15
        },
        {
          "id": 661,
          "date": "2024-04-17T00:00:00",
          "roomId": 15
        },
        {
          "id": 662,
          "date": "2024-04-18T00:00:00",
          "roomId": 15
        },
        {
          "id": 663,
          "date": "2024-04-19T00:00:00",
          "roomId": 15
        },
        {
          "id": 664,
          "date": "2024-04-20T00:00:00",
          "roomId": 15
        },
        {
          "id": 665,
          "date": "2024-04-21T00:00:00",
          "roomId": 15
        },
        {
          "id": 666,
          "date": "2024-04-22T00:00:00",
          "roomId": 15
        },
        {
          "id": 667,
          "date": "2024-04-23T00:00:00",
          "roomId": 15
        },
        {
          "id": 668,
          "date": "2024-04-24T00:00:00",
          "roomId": 15
        },
        {
          "id": 669,
          "date": "2024-04-25T00:00:00",
          "roomId": 15
        },
        {
          "id": 670,
          "date": "2024-04-26T00:00:00",
          "roomId": 15
        },
        {
          "id": 671,
          "date": "2024-04-27T00:00:00",
          "roomId": 15
        },
        {
          "id": 672,
          "date": "2024-04-28T00:00:00",
          "roomId": 15
        },
        {
          "id": 673,
          "date": "2024-04-29T00:00:00",
          "roomId": 15
        },
        {
          "id": 674,
          "date": "2024-04-30T00:00:00",
          "roomId": 15
        },
        {
          "id": 675,
          "date": "2024-05-01T00:00:00",
          "roomId": 15
        },
        {
          "id": 676,
          "date": "2024-05-02T00:00:00",
          "roomId": 15
        },
        {
          "id": 677,
          "date": "2024-05-03T00:00:00",
          "roomId": 15
        },
        {
          "id": 678,
          "date": "2024-05-04T00:00:00",
          "roomId": 15
        },
        {
          "id": 679,
          "date": "2024-05-05T00:00:00",
          "roomId": 15
        },
        {
          "id": 680,
          "date": "2024-05-06T00:00:00",
          "roomId": 15
        },
        {
          "id": 681,
          "date": "2024-05-07T00:00:00",
          "roomId": 15
        },
        {
          "id": 682,
          "date": "2024-05-08T00:00:00",
          "roomId": 15
        },
        {
          "id": 683,
          "date": "2024-05-09T00:00:00",
          "roomId": 15
        },
        {
          "id": 684,
          "date": "2024-05-10T00:00:00",
          "roomId": 15
        },
        {
          "id": 685,
          "date": "2024-05-11T00:00:00",
          "roomId": 15
        }
      ],
      "images": [
        {
          "id": 75,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/ea540433.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 76,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/2b8b7804.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 77,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/26bab1f5.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 78,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/496c6b5a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 79,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/2f36defd.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 80,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/ea540433.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 81,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/2b8b7804.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        },
        {
          "id": 82,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/26bab1f5.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 15
        }
      ]
    },
    {
      "id": 16,
      "name": "Superior Room",
      "hotelId": 3,
      "pricePerNight": 299,
      "available": true,
      "maximumGuests": 6,
      "roomTypeId": 3,
      "bookedDates": [],
      "images": [
        {
          "id": 83,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/406a3697.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 84,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/fa9c4653.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 85,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/14f420c8.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 86,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/c71aa3a5.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 87,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/549de7ab.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 88,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/a4557c21.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        },
        {
          "id": 89,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/72dc8d9c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 16
        }
      ]
    },
    {
      "id": 17,
      "name": "Superior Room, City View (High Floor)",
      "hotelId": 3,
      "pricePerNight": 399,
      "available": true,
      "maximumGuests": 3,
      "roomTypeId": 3,
      "bookedDates": [
        {
          "id": 840,
          "date": "2024-02-07T00:00:00",
          "roomId": 17
        },
        {
          "id": 841,
          "date": "2024-02-08T00:00:00",
          "roomId": 17
        },
        {
          "id": 842,
          "date": "2024-02-09T00:00:00",
          "roomId": 17
        },
        {
          "id": 843,
          "date": "2024-02-10T00:00:00",
          "roomId": 17
        },
        {
          "id": 844,
          "date": "2024-02-11T00:00:00",
          "roomId": 17
        },
        {
          "id": 845,
          "date": "2024-02-12T00:00:00",
          "roomId": 17
        },
        {
          "id": 846,
          "date": "2024-02-13T00:00:00",
          "roomId": 17
        },
        {
          "id": 847,
          "date": "2024-02-14T00:00:00",
          "roomId": 17
        },
        {
          "id": 848,
          "date": "2024-05-08T00:00:00",
          "roomId": 17
        }
      ],
      "images": [
        {
          "id": 90,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/10371176.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        },
        {
          "id": 91,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/549de7ab.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        },
        {
          "id": 92,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/c71aa3a5.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        },
        {
          "id": 93,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/16a596de.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        },
        {
          "id": 94,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/72dc8d9c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        },
        {
          "id": 95,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/10371176.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 17
        }
      ]
    },
    {
      "id": 18,
      "name": "Standard Room",
      "hotelId": 3,
      "pricePerNight": 99,
      "available": true,
      "maximumGuests": 2,
      "roomTypeId": 1,
      "bookedDates": [],
      "images": [
        {
          "id": 96,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/406a3697.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        },
        {
          "id": 97,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/67b0e7dc.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        },
        {
          "id": 98,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/549de7ab.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        },
        {
          "id": 99,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/95f52722.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        },
        {
          "id": 100,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/d3c76ffb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        },
        {
          "id": 101,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/715be0ff.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 18
        }
      ]
    },
    {
      "id": 19,
      "name": "Junior Suite",
      "hotelId": 3,
      "pricePerNight": 199,
      "available": true,
      "maximumGuests": 4,
      "roomTypeId": 2,
      "bookedDates": [
        {
          "id": 746,
          "date": "2024-01-31T00:00:00",
          "roomId": 19
        },
        {
          "id": 747,
          "date": "2024-02-01T00:00:00",
          "roomId": 19
        },
        {
          "id": 748,
          "date": "2024-02-02T00:00:00",
          "roomId": 19
        },
        {
          "id": 749,
          "date": "2024-02-03T00:00:00",
          "roomId": 19
        },
        {
          "id": 750,
          "date": "2024-02-04T00:00:00",
          "roomId": 19
        },
        {
          "id": 751,
          "date": "2024-02-05T00:00:00",
          "roomId": 19
        },
        {
          "id": 752,
          "date": "2024-02-06T00:00:00",
          "roomId": 19
        },
        {
          "id": 753,
          "date": "2024-02-07T00:00:00",
          "roomId": 19
        },
        {
          "id": 754,
          "date": "2024-02-08T00:00:00",
          "roomId": 19
        },
        {
          "id": 755,
          "date": "2024-02-09T00:00:00",
          "roomId": 19
        },
        {
          "id": 756,
          "date": "2024-02-10T00:00:00",
          "roomId": 19
        },
        {
          "id": 757,
          "date": "2024-02-11T00:00:00",
          "roomId": 19
        },
        {
          "id": 758,
          "date": "2024-02-12T00:00:00",
          "roomId": 19
        },
        {
          "id": 759,
          "date": "2024-01-31T00:00:00",
          "roomId": 19
        },
        {
          "id": 760,
          "date": "2024-02-01T00:00:00",
          "roomId": 19
        },
        {
          "id": 761,
          "date": "2024-02-02T00:00:00",
          "roomId": 19
        },
        {
          "id": 762,
          "date": "2024-02-03T00:00:00",
          "roomId": 19
        },
        {
          "id": 763,
          "date": "2024-02-04T00:00:00",
          "roomId": 19
        },
        {
          "id": 764,
          "date": "2024-02-05T00:00:00",
          "roomId": 19
        },
        {
          "id": 765,
          "date": "2024-02-06T00:00:00",
          "roomId": 19
        },
        {
          "id": 766,
          "date": "2024-02-07T00:00:00",
          "roomId": 19
        },
        {
          "id": 767,
          "date": "2024-02-08T00:00:00",
          "roomId": 19
        },
        {
          "id": 768,
          "date": "2024-02-09T00:00:00",
          "roomId": 19
        },
        {
          "id": 769,
          "date": "2024-02-10T00:00:00",
          "roomId": 19
        },
        {
          "id": 770,
          "date": "2024-02-11T00:00:00",
          "roomId": 19
        },
        {
          "id": 771,
          "date": "2024-02-12T00:00:00",
          "roomId": 19
        }
      ],
      "images": [
        {
          "id": 102,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/a2a0d8cd.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 19
        },
        {
          "id": 103,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/029d4d4c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 19
        },
        {
          "id": 104,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/411ebc16.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 19
        },
        {
          "id": 105,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/d09117ce.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 19
        },
        {
          "id": 106,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/c9d0a60d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 19
        }
      ]
    },
    {
      "id": 20,
      "name": "Premium Room",
      "hotelId": 3,
      "pricePerNight": 149,
      "available": true,
      "maximumGuests": 2,
      "roomTypeId": 3,
      "bookedDates": [
        {
          "id": 307,
          "date": "2023-12-10T00:00:00",
          "roomId": 20
        }
      ],
      "images": [
        {
          "id": 107,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/2b8b7804.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 20
        },
        {
          "id": 108,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/a263f2a2.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 20
        },
        {
          "id": 109,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/2056565d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 20
        },
        {
          "id": 110,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/e498958a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 20
        },
        {
          "id": 111,
          "source": "https://images.trvl-media.com/lodging/3000000/2620000/2614700/2614694/4f130092.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          "roomId": 20
        }
      ]
    }
  ]
