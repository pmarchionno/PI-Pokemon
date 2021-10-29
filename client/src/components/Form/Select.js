import React from 'react';
import { Select, Label, GrupoSelect, LeyendaError, IconoValidacion } from './Formularios';
// import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

const ComponenteSelect = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion, listOptions }) => {
	const onChange = (e) => {
		cambiarEstado({ ...estado, campo: e.target.value });
	}

	const validacion = () => {
		if (expresionRegular) {
			if (expresionRegular.test(estado.campo)) {
				cambiarEstado({ ...estado, valido: 'true' });
			} else {
				cambiarEstado({ ...estado, valido: 'false' });
			}
		}

		if (funcion) {
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoSelect>
				<Select
					type={tipo}
					placeholder={placeholder}
					id={name}
					// value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				>
					<option value="" hidden>
						Type
					</option>
					<option value="ALGO" hidden>
						Type
					</option>
				</Select>
				<IconoValidacion
					icon={estado.valido === 'true' ? FcCheckmark : FcCancel}
					valido={estado.valido}
				/>
			</GrupoSelect>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}

export default ComponenteSelect;