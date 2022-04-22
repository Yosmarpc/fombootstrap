import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        correo: "",
        password: "",
        arrya: [],

    });

    const { correo, password } = formData;

    const handleChange = (e) => {
        console.log([e.target.name] + '  :  ' + e.target.value)

        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const clickkkk = (correo, password) => {
        alert(correo + ' ' + password);
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="correo"
                        value={correo}
                        onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => clickkkk(correo, password)} >
                    Submit
                </button>
            </form>
        </div >
    );
};

export default Form;
