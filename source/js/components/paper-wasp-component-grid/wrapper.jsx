// @flow

import {Grid} from './container';
import {GridEditMode} from './container-edit-mode';

type Props = {
    context: string
};

function GridWrapper({context, ...props}: Props) {
    return context === 'view' ? <Grid {...props} /> : <GridEditMode {...props} />;
}

export {GridWrapper as Grid};
