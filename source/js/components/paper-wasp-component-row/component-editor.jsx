// @flow

type Props = {
    components: Object,
    updateComponent: Function
}

export default function RowEditor({components, updateComponent}: Props) {
    const box = components.map(({uid}, index) => {

        const initWidth = window.getComputedStyle(
            window.document.querySelector(`[data-pw-uid='${uid}']`)
        ).getPropertyValue('flex-basis');

        return (
            <label className="paper-wasp-field" key={uid}>
                <span>Column {index + 1}</span>
                <input
                    defaultValue={initWidth}
                    onChange={(ev) => {
                        updateComponent(uid, {style: {flexBasis: ev.target.value}});
                    }} />
            </label>
        );
    });
    return (
        <div>
            {box}
        </div>
    );
}
