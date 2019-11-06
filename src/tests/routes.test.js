const test = require("tape");
const request = require("supertest");
const app = require("../app");
test("All routes should return the expected results", t => {
  const post = {
    post_id: 1,
    title: "omri test",
    content_text: "bla bla",
    content_img_url: "adsad.com",
    user_id: 1,
    post_rank: 1
  };
  request(app)
    .post("/add-post")
    .send(post)
    .expect(201)
    .expect("Content-Type", /json/)
    .end((err, res) => {
      t.error(err);
      t.same(res.body[0].title, "omri test");

      t.end();
    });
});
