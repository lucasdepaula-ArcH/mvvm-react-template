import { useEnaIPDOViewModel } from "./view.model";
import './styles.scss'

export default function EnaIPDOView() {
    const { } = useEnaIPDOViewModel()

    return (
        <div className="center">
            EnaIPDO
        </div>
    )
}