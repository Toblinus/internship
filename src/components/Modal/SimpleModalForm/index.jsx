import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import ModalForm from '../ModalBase';
import ModalFormField from '../ModalFormField';

import './style.css';

const SimpleModalForm = ({ onOk, onCansel, allowReset, fields }) => {
    const actions = [];
    const ref = useRef();

    const funcOk = () => {
        const values = {};
        ref.current?.forEach((elm, index) => {
            values[fields[index].name] = (
                elm.type !== 'checkbox' && elm.type !== 'radio'
            ) ? elm.value : elm.checked;
        });
        onOk(values);
    }

    if(typeof onOk === 'function') {
        actions.push({
            content: 'OK',
            action: funcOk
        })
    }

    if(allowReset) {
        actions.push({
            content: 'Сбросить',
            action: () => {
                ref.current?.forEach((elm, index) => {
                    elm.value = fields[index].value || "";
                });
            }
        });
    }

    if(typeof onCansel === 'function') {
        actions.push({
            content: 'Отмена',
            action: onCansel
        });
    }

    return (<ModalForm
        actions={actions}
        onCancel={onCansel}
    >
        <div className="simple-modal-form__content">
        {
            fields.map(field => <ModalFormField 
                title = { field.title }
                key={field.name}
                type = { field.type }
                onKeyUp = {(event) => {
                   if(event.code === 'Enter') {
                        funcOk();
                   }
                }}
                defaultValue = { field.value }
                defaultChecked = { field.checked }
                refProp = { ref } 
            />)    
        }
        </div>
    </ModalForm>);
}

const fieldBase = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
}

SimpleModalForm.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCansel: PropTypes.func.isRequired,
    allowReset: PropTypes.bool,
    fields: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.exact({
            ...fieldBase,
            checked: PropTypes.bool
        }), 
        PropTypes.exact({
            ...fieldBase,
            value: PropTypes.any
        })]
    ))
}

SimpleModalForm.defaultProps = {
    fields: [],
    allowReset: false
}

export default SimpleModalForm;