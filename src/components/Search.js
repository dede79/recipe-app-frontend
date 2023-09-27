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
        <div>
          <FaSearch />
        <input
            onChange={handleChange}
            type="text"
            value={input}
        />
        </div>
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
    left:15px;
    transform: translate(100%, -50%);
    color:green;
  }
`
export default Search;
