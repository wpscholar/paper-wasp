// @flow

type Props = {
    data: {
        align: string,
        backgroundColor: string,
        borderColor: string,
        borderRadius: number,
        borderThickness: number,
        hoverColor: string,
        link: string,
        newTab: bool,
        textColor: string,
        text: string
    },
    onChange: Function
};

function ButtonEditor(
    {
        data: {
            align = 'left',
            backgroundColor = '',
            borderColor = '',
            borderRadius = 0,
            borderThickness = 0,
            hoverColor = '',
            link = '',
            newTab = false,
            textColor = '',
            text = ''
        },
        onChange
    }: Props
) {
    return (
        <div className="paper-wasp-button-editor">

            <label className="paper-wasp-field">
                <span>Button Text</span>
                <input
                    onChange={e => onChange({text: e.target.value})}
                    type="text"
                    value={text} />
            </label>

            <label className="paper-wasp-field">
                <span>Button URL</span>
                <input
                    onChange={e => onChange({link: e.target.value})}
                    type="text"
                    value={link} />
            </label>

            <label className="paper-wasp-field">
                <input
                    checked={newTab}
                    name="newTab"
                    onChange={e => onChange({newTab: e.target.checked})}
                    type="checkbox" />
                <span>Open in new tab?</span>
            </label>

            <label className="paper-wasp-field">
                <span>Button Alignment</span>
                <select
                    onChange={e => onChange({align: e.target.value})}
                    value={align}>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </label>

            <label className="paper-wasp-field">
                <span>Background Color</span>
                <input
                    onChange={e => onChange({backgroundColor: e.target.value})}
                    type="text"
                    value={backgroundColor} />
            </label>

            <label className="paper-wasp-field">
                <span>Text Color</span>
                <input
                    onChange={e => onChange({textColor: e.target.value})}
                    type="text"
                    value={textColor} />
            </label>

            <label className="paper-wasp-field">
                <span>Border Thickness (px)</span>
                <input
                    onChange={e => onChange({borderThickness: e.target.value})}
                    step="1"
                    type="number"
                    value={borderThickness} />
            </label>

            <label className="paper-wasp-field">
                <span>Border Color</span>
                <input
                    onChange={e => onChange({borderColor: e.target.value})}
                    type="text"
                    value={borderColor} />
            </label>

            <label className="paper-wasp-field">
                <span>Border Radius (px)</span>
                <input
                    onChange={e => onChange({borderRadius: e.target.value})}
                    step="1"
                    type="number"
                    value={borderRadius} />
            </label>

            <label className="paper-wasp-field">
                <span>Hover Color</span>
                <input
                    onChange={e => onChange({hoverColor: e.target.value})}
                    type="text"
                    value={hoverColor} />
            </label>

        </div>

    );
}

export {ButtonEditor};
