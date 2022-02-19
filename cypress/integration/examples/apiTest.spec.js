describe("Basic api Tests", () => {
   it("GET", () => {
      cy.request("/api/users/2").as("userList");
      cy.get("@userList").then((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.deep.equals({
            data: {
               id: 2,
               email: "janet.weaver@reqres.in",
               first_name: "Janet",
               last_name: "Weaver",
               avatar: "https://reqres.in/img/faces/2-image.jpg",
            },
            support: {
               url: "https://reqres.in/#support-heading",
               text: "To keep ReqRes free, contributions towards server costs are appreciated!",
            },
         });
      });
   });

   it("DELETE", () => {
      cy.request("DELETE", "/api/users/2").as("userList");
      cy.get("@userList").then((response) => {
         expect(response.status).to.eq(204);
      });
   });

   it("POST", () => {
      cy.request("POST", "/api/users", {
         name: "prajwal",
         job: "tester",
         id: "773",
      }).as("postUser");
      cy.get("@postUser").then((response) => {
         expect(response.status).to.eq(201);
         expect(response.body).to.deep.contains({
            name: "prajwal",
            job: "tester",
            id: "773",
         });
      });
   });

   it("PATCH", () => {
      cy.request("PATCH", "/api/users/2", {
         name: "morpheus",
         job: "zion resident",
      }).as("userList");
      cy.get("@userList").then((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.deep.contains({
            name: "morpheus",
            job: "zion resident",
         });
      });
   });
});
