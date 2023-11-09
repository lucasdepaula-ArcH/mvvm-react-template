import { Input } from "../../components/Form/Input";
import { Button } from "@carbon/react";
import { useLoginViewModel } from "./view.model";
import './styles.scss'
import { dateInputMask } from "../../helpers/masks/dateInputMask";

export default function LoginView() {
    const { email, handleChangeEmail, handleRequestLogin } = useLoginViewModel()

    return (
        <div className="center">
            Pagina de login
            <div>
                <Input labelText="email" id="email" value={email} onChange={handleChangeEmail}  />
                <Input labelText="data exemplo helpers" id="data" onKeyDown={dateInputMask} />
                <Button onClick={handleRequestLogin}>Entrar</Button>
            </div>
        </div>
    )
}