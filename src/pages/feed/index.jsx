import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {

    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>
                    # Ranking top 5 da semana
                </TitleHighlight>
                <UserInfo percentual={90} nome="Jorge Felipe" image="https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4"/>
                <UserInfo percentual={80} nome="Jorge Felipe" image="https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4"/>
                <UserInfo percentual={70} nome="Jorge Felipe" image="https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4"/>
                <UserInfo percentual={60} nome="Jorge Felipe" image="https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4"/>
                <UserInfo percentual={50} nome="Jorge Felipe" image="https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4"/>
            </Column>
            
        </Container>
    </>)
}

export { Feed }