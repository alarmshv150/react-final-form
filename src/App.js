import { Form, Field } from "react-final-form";
import Input from "./Input";

function App() {
  const initialData = {
    firstName: "Oleksii",
  };
  const onSubmit = (e) => {
    debugger;
  };
  const validate = (e) => {
    const errors = {};

    if (e.bio && e.bio.length < 5) errors.bio = "Too short";

    return errors;
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
              />
            </div>

            <div>
              <label>Second Name</label>
              <Field name="secondName">
                {({ input, meta }) => (
                  <div>
                    <Input {...input} />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <label>Phone</label>
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <input
                      type="text"
                      {...input}
                      placeholder="(888) 888-88-88"
                    />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <label>Bio</label>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <div>
                    <textarea {...input} />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default App;
