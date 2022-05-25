import { Wrapper, Text, Button } from "./UserMenu.styled";

export const UserMenu = () => {
    return (
        <Wrapper>
            <Text>Добро пожаловать!</Text>
            <Button type="button">Logout</Button>
        </Wrapper>
    )
}