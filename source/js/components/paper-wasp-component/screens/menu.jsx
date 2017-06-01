// @flow
import map from 'lodash.map';
import sortBy from 'lodash.sortby';

type Props = {
    onClick: Function,
    screen: 'edit' | 'advanced';
};

const screens = {
    advanced: {
        icon: '\u2699',
        index: 1,
        key: 'advanced',
        title: 'Advanced'
    },
    edit: {
        icon: '\u270e',
        index: 0,
        key: 'edit',
        title: 'Edit'
    }
};

function Menu({onClick, screen}: Props) {
    return (
        <div className="paper-wasp-component-editor__menu">
            {map(sortBy(screens, 'index'), ({icon, key, title}) => {
                const isActive = screen === key;
                const classes = ['paper-wasp-component-editor__menu_option'];
                if (isActive) {
                    classes.push('paper-wasp-component-editor__menu_option--active');
                }
                return (
                    <button
                        className={classes.join(' ').trim()}
                        key={key}
                        onClick={() => onClick(key)}
                        title={title}>
                        {icon}
                    </button>
                );
            })}
        </div>
    );
}

export default Menu;
