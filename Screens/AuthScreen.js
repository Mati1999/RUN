import { StyleSheet,Text,View,TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { colors } from '../Styles/Colors';
import Input from '../Components/Input';
import { useDispatch } from 'react-redux';
import { signUp,SignIn } from '../Features/auth';
import { schemaEmail,schemaPassword } from '../Utils/validateSchemas';



const LoginScreen = () => {

    const [registroVista,setRegistroVista] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPasword] = useState('');
    const [confirmPasword,setConfirmPasword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    const [signIn,setSignIn] = useState(false);
    const dispatch = useDispatch()

    const handleSignUp = () => {

        const validateEmail = schemaEmail.validate({ email: email })
        const validatePassword = schemaPassword.validate({ password: password })

        if (validateEmail.error) setEmailError(validateEmail.error.message)
        else setEmailError('')
        if (validatePassword.error) setPasswordError(validatePassword.error.message)
        else setPasswordError('')
        if (validatePassword.error) setConfirmPasswordError(validatePassword.error.message)
        else setConfirmPasswordError('')

        if (password === confirmPasword && emailError === '' && passwordError === '' && confirmPasswordError === '') {
            console.log('Registrado');
            dispatch(signUp({ email: email,password: password }))
        }
    }

    const handleSignIn = () => {

        const validateEmail = schemaEmail.validate({ email: email })
        const validatePassword = schemaPassword.validate({ password: password })

        if (validateEmail.error) setEmailError(validateEmail.error.message)
        else setEmailError('')
        if (validatePassword.error) setPasswordError(validatePassword.error.message)
        else setPasswordError('')

        if (emailError === '' && passwordError === '') {
            console.log('Sesión Iniciada');
            dispatch(SignIn({ email: email,password: password }))
        }
    }

    return (
        <View style={styles.container}>
            {!signIn ?
                <View style={styles.content}>
                    <Text style={styles.title}>SignUp</Text>
                    <Input label='Email' password={false} onChange={setEmail} value={email} error={emailError} />
                    <Input label='Password' password={true} onChange={setPasword} value={password} error={passwordError} />
                    <Input label='Confirm password' password={true} onChange={setConfirmPasword} value={confirmPasword} error={confirmPasswordError} />
                    <TouchableOpacity>
                        <Text onPress={handleSignUp}>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={() => setSignIn(true)}>I want to SingIn</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.content}>
                    <Text style={styles.title}>SignIn</Text>
                    <Input label='Email' password={false} onChange={setEmail} value={email} error={emailError} />
                    <Input label='Password' password={true} onChange={setPasword} value={password} error={passwordError} />
                    <TouchableOpacity>
                        <Text onPress={handleSignIn}>SignIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={() => setSignIn(false)}>I want to SingUp</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige
    },
    content: {
        width: '80%',
        height: '50%',
        backgroundColor: colors.darkBlue,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    title: {
        fontFamily: 'LatoRegular',
        fontSize: 24,
        textAlign: 'center'
    },

})