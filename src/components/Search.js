import styled from 'styled-components'

import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search(){

  const [input, setInput] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
      setInput(e.target.value)
    }

  const handleSubmit = (e) => {
    //prevent normal form submit behaviour
    e.preventDefault();
    //navigate to searched page + whatever user input was
    navigate('/searched/' + input);
  }

  return(

      <FormStyle onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            type="search"
            placeholder="Type an ingredient..."
            value={input}
        />
          <button type="submit" > <FaSearch /> </button>
      </FormStyle>
  )
}

const FormStyle = styled.form `
  margin: 0 20rem;
  position: relative;
  width: 100%;
  max-width: 350px;
  padding-top: 30px;
  input {
    border:none;
    background: #00800024;
    font-size: 1.5rem;
    color:#454545;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }
  svg{
    position: absolute;
    top:60%;
    right:0;
    transform: translate(100%, -50%);
    color:green;
    cursor:pointer;
    width:20px;
    height:20px;
  }
  button{
    position: absolute;
    right: 0;
    top: 60%;
    width: 20px;
    height: 10px;
    color: transparent;
    background-color: transparent;
    border: none;
  }
`
export default Search;
