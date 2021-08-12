import styles from '../styles/components/Form.module.scss';
import FormFieldset from './FormFieldset';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import Button from './Button';

const Form = () => {
    return (
        <div className={styles['c-form-wrapper']}>
            <form
                action="/contact/?success=true"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className={styles['c-form']}
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <FormFieldset>
                    <p className="u-b1 u-fw-700 u-uppercase">Your name</p>
                    <FormInput type={'text'} placeholder={'Enter your name'} />
                </FormFieldset>
                <FormFieldset>
                    <p className="u-b1 u-fw-700 u-uppercase">Your name</p>
                    <FormInput type={'email'} placeholder={'Enter your email'} />
                </FormFieldset>
                <FormFieldset>
                    <p className="u-b1 u-fw-700 u-uppercase">Your message</p>
                    <FormTextarea placeholder={'Enter your message'} />
                </FormFieldset>
                <FormFieldset>
                    <Button type={'submit'} label={'Send'} variant={'primary'} />
                </FormFieldset>
            </form>
        </div>
    );
};

export default Form;
