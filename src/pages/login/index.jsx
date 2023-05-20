import { MdEmail, MdLock } from 'react-icons/md'

import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('e-mail nao e valido').required('Campo obrigatorio!'),
    password: yup.string().min(6, 'No minimo 6 digiotos').required('Campo obrigatorio!'),
  }).required();

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }
            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" ErrorMessage={errors?.email?.message} leftIcon={<MdEmail />} name="email" control={control} />
                    
                    <Input type="password" placeholder="Senha" ErrorMessage={errors?.password?.message} leftIcon={<MdLock />} name="password" control={control} />
                    {errors.password && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export { Login }
