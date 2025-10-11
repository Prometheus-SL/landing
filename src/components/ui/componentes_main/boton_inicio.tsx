
import { ShimmerButton } from "../shimmer-button";

type BotonInicioProps = {
    className?: string;
    onClick?: () => void;

};

export const BotonInicio = ({ className, onClick }: BotonInicioProps) => {
    return (
        <div className="flex justify-center mb-10">
            <ShimmerButton className={className} onClick={onClick}>
                Prometheus SL
            </ShimmerButton>
        </div>
    );
};
