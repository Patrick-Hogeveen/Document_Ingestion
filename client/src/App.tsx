
  import { useState, ChangeEvent, FormEvent } from "react";
  //import Logo  from "/vite.svg";
  import { getData } from "./utils/data-utils";
  import FormInput from '/src/components/form-inp/form-inp';
  import axios from 'axios';

  import './App.css';

  // TypeScript declarations
  type User = {
    id: number,
    name: string,
    email: string,
    password: string
  }

  type File = {
    name: string,
    file: File,
  }

  const defaultFormFields = {
    name: '',
    file: null,
  }

  const App = () => {
    // react hooks
    //const [user, setUser] = useState<User | null>()
    
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    function handleMultipleChange(event: Event) {
      console.log(event)
      setFiles([...event.target.files]);
    }
  
    

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`file${index}`, file)
      })
      const config = {headers: {'Content-Type': 'multipart/form-data'}}

      try {
        // make the API call
        axios.post('http://localhost:8000/upload', formData).then((response: any) => {
      console.log(response.data);
    });
        
        
      } catch (error) {
        console.log(error)
        alert('File upload failed');
      }
    };

    const reload = () => {
      
      
    };

    return (
      <div className='App-header'>
        
        <div className="card">
          
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h1>React Multiple File Upload</h1>
        <input type="file" multiple onChange={handleMultipleChange} />
        <button type="submit">Upload</button>
      </form>
        </div>
      </div>
    );
  }

  export default App;
  