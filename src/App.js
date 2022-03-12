import { useForm } from 'react-hook-form';

// Styles
import './App.css';

function App() {
  const { register, handleSubmit, watch } = useForm();
  const name = watch("name");
  const cakes = watch("cakes");
  const example = watch("example")

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(name);
    console.log(cakes);
    console.log(example);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Name:</label>
      <input name="name" id="name" {...register("name")} />

      <label>
        <input
          name="cakes"
          {...register("cakes")}
          value={true}
          type="checkbox"
        />
        cakes
      </label>
      

      {
        cakes && (
          <div>
            <label htmlFor="favouriteFlavour">Favourite</label>
            <select id="favouriteFlavour" name="favouriteFlavour" >
              <option value="lime">Lime</option>
              <option value="chocolate">Chocolate</option>
              <option value="mango">Mango</option>
              <option value="orange">Orange</option>
            </select>
          </div>
        )
      }

      <label>
        <input
          name="example"
          {...register("example")}
          value={true}
          type="checkbox"
        />
        Example 1 (basic input)
      </label>
      {/* {errors.example_1 && <p class="error">{errors.example_1.message}</p>} */}
      <br />

      <button>
        Submit
      </button>
    </form>
    </>
  );
}

export default App;
