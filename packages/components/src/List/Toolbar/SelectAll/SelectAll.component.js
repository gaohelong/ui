import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import theme from './SelectAll.scss';

function SelectAll({ id, items, isSelected, onToggleAll }) {
	const isAllSelected = () => items.length > 0 && items.findIndex(item => !isSelected(item)) < 0;
	const checkboxId = id && `${id}-check-all`;
	return (
		<form className="navbar-form navbar-left">
			<div className={classNames('checkbox-inline navbar-text', theme['tc-list-toolbar-select-all'])}>
				<label className="tc-list-toolbar-select-all" htmlFor={checkboxId}>
					<input
						id={checkboxId}
						type="checkbox"
						onChange={(event) => { onToggleAll(event, items); }}
						checked={isAllSelected()}
						disabled={!items.length}
					/>
					<span>Select All</span>
				</label>
			</div>
		</form>
	);
}

SelectAll.propTypes = {
	id: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	isSelected: PropTypes.func.isRequired,
	onToggleAll: PropTypes.func.isRequired,
};

export default SelectAll;
