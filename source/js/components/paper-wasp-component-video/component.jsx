// @flow

import {Component} from 'react';

class Video extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        className: string,
        context: string,
        data: {
            align: string,
            embed: string,
            height: number,
            isResponsive: boolean,
            width: number,
            url: string
        },
        id: string,
        updateEmbed: Function
    };

    componentDidMount() {
        const {data: {embed, height = 0, width = 0, url}, updateEmbed} = this.props;
        if (url && url.length && !embed) {
            updateEmbed(url, width, height);
        }
    }

    componentDidUpdate(prevProps: Object) {
        const {data: {height: prevHeight = 0, width: prevWidth = 0, url: prevUrl} = {}} = prevProps;
        const {data: {height = 0, width = 0, url}, updateEmbed} = this.props;
        if (prevUrl !== url || prevHeight !== height || prevWidth !== width) {
            updateEmbed(url, width, height);
        }
    }

    render() {
        const {className, context, data, id} = this.props;
        const {align = 'left', embed, height = 0, isResponsive = true, width = 0, url} = data;
        const classes = ['paper-wasp-video', className];
        if (isResponsive) {
            classes.push('paper-wasp-video--responsive');
        } else {
            classes.push(`paper-wasp-video--${align}`);
        }
        return (
            <div className={classes.join(' ').trim()} id={id}>
                {context === 'view' ? (
                    getVideoShortcode(url, width, height)
                ) : (
                    <div dangerouslySetInnerHTML={{__html: embed}} />
                )}
            </div>
        );
    }

}

function getVideoShortcode(url, width, height) {
    const widthAttr = width ? ` width="${width}"` : '';
    const heightAttr = height ? ` height="${height}"` : '';
    return `[video src="${url}"${widthAttr}${heightAttr} /]`;
}

export default Video;
