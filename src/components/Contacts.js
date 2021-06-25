import React, { useState } from "react";

function Contacts() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleClick = () => {
    alert(
      data.fullname +
        "\n" +
        data.email +
        "\n" +
        data.subject +
        "\n" +
        data.message
    );
  };

  return (
    <div className="row" id="contacts">
      <div className="col-10 mx-auto">
        <h1 className="mx-auto contact__h1 my-3">Contact US</h1>
        {/* form starting here */}
        <div className="contact__form  my-3">
          <form>
            <div class="mb-3">
              {/* fullname */}
              <label for="exampleInputFullName" class="form-label">
                Fullname
              </label>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                class="form-control"
                id="exampleInputFullName"
                aria-describedby="emailHelp"
                name="fullname"
                value={data.fullname}
              />
            </div>
            {/* email */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                placeholder="example@email.com"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={data.email}
              />
            </div>
            {/* subject */}
            <div class="mb-3">
              <label for="exampleInputSubject" class="form-label">
                Subject
              </label>
              <input
                onChange={handleChange}
                type="text"
                placeholder="eg. Want to see projects"
                class="form-control"
                id="exampleInputSubject"
                aria-describedby="emailHelp"
                name="subject"
                value={data.subject}
              />
            </div>

            <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                onChange={handleChange}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={data.message}
              ></textarea>
            </div>

            <button
              onClick={handleClick}
              type="submit"
              class="btn btn-outline-danger home__btn "
            >
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
