  const paypal = require("paypal-rest-sdk");

  paypal.configure({
    mode: "sandbox",
    client_id: "AW7yZC10XyVLDz5vAGaLk32GCTah89oBt0o-tJquxmOPkbfoiLynoBtUrSQcnKdLHTpQjTqlgs_wzWEE",
    client_secret: "EAhFqmSD9t4t77tIrE3jq4X88dPH6mInVqgKcs0SeGDzgnNs0XWgJlBU3CkdVxwTD8aOesqkZGJcLEIb",
  });

  module.exports = paypal;
