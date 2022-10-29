import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';

export const FormikFormStudentsEnrollment = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [sedeElegida, setSedeElegida] = useState(null);

    const sedes = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e) => {
        setSedeElegida(e.value);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            if (!data.accept) {
                errors.accept = 'You need to agree to the terms and conditions.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">

                </div>
            </Dialog>

            <div className="flex-container" style={{ width: "100%" }}>
                <div className="col-6 flex justify-content-center flex-child">
                    <div className="card" style={{ display: "flex", justifyContent: "center" }}>
                        <h5 className="text-center">Buscador de</h5>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">

                            <div className="field py-2">
                                <span className="p-float-label">
                                    <Dropdown value={sedeElegida} options={sedes} onChange={onCityChange} optionLabel="name" placeholder="Selecciones una sede" />
                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Sede</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>

                            <Button type="submit" label="Send" className="mt-2 boton-gris" />
                        </form>
                    </div>
                </div>
                <div className="col-6 flex justify-content-center flex-child" style={{ backgroundColor: '#708C78', justifyContent: 'center', borderLeft: "solid 2px" }}>
                    <img className="d-inline-block align-top" src="/images/Group 11.png" style={{ height: '85%' }} />
                </div>
            </div>
        </div>
    );
}