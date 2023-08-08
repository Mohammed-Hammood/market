type Props = {
    name: string
    color?: string;
    class?: string;
    height?: string;
    width?: string;
}

type IconsTypes = {
    [key: string]: JSX.Element
}

export default function ICON(props: Props): JSX.Element | null {
    const CLASS: string = props.class || 'icon';
    const COLOR = props.color || 'black';
    const HEIGHT = props.height || "1em";
    const WIDTH = props.width || "15";

    const ICONS: IconsTypes = {
        'magnifying-glass-solid': <svg xmlns="http://www.w3.org/2000/svg" className={CLASS} height={HEIGHT} width={WIDTH} viewBox="0 0 512 512"><path fill={COLOR} d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>,
        'xmark-solid': <svg xmlns="http://www.w3.org/2000/svg" className={CLASS} height={HEIGHT} width={WIDTH} viewBox="0 0 384 512" ><path fill={COLOR} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>,
        'expand-solid': <svg xmlns="http://www.w3.org/2000/svg" className={CLASS} height={HEIGHT} width={WIDTH} viewBox="0 0 448 512"><path fill={COLOR} d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" /></svg>,
        'compress-solid': <svg xmlns="http://www.w3.org/2000/svg" className={CLASS} height={HEIGHT} width={WIDTH} viewBox="0 0 448 512"><path fill={COLOR} d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" /></svg>,
        'sun-ellipsis-solid': <svg width={WIDTH} height={HEIGHT} viewBox="0 0 59 28" fill={COLOR} xmlns="http://www.w3.org/2000/svg"><rect width="59" height="28" rx="14" fill="#17161C" /><ellipse cx="14.5" cy="14" rx="11.5" ry="11" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M38.6089 19.5291C43.3608 19.5291 47.2131 15.6769 47.2131 10.9249C47.2131 8.85219 46.4801 6.95063 45.2593 5.46527C48.3349 6.77701 50.4908 9.82838 50.4908 13.3833C50.4908 18.1352 46.6386 21.9874 41.8866 21.9874C39.2074 21.9874 36.8142 20.7629 35.2362 18.8429C36.2719 19.2847 37.4118 19.5291 38.6089 19.5291Z" fill="white" /><path d="M39.838 8.87637L40.5019 10.6707L42.2963 11.3347L40.5019 11.9987L39.838 13.793L39.174 11.9987L37.3796 11.3347L39.174 10.6707L39.838 8.87637Z" fill="white" /><path d="M42.5012 13.3833L42.8885 14.43L43.9352 14.8173L42.8885 15.2046L42.5012 16.2514L42.1138 15.2046L41.0671 14.8173L42.1138 14.43L42.5012 13.3833Z" fill="white" /></svg>,
        'moon-ellipsis-solid': <svg width={WIDTH} height={HEIGHT} viewBox="0 0 59 28" fill={COLOR} xmlns="http://www.w3.org/2000/svg"><rect width="59" height="28" rx="14" fill="#C2C2C2" /><ellipse cx="43.5" cy="14" rx="11.5" ry="11" fill="white" /><path d="M15 4L16.6034 7.49469L19.6472 5.14544L19.4429 8.98498L23.2298 8.31935L21.2646 11.6241L24.9271 12.7946L21.6511 14.8076L24.3502 17.546L20.514 17.806L21.6312 21.4851L18.1136 19.9326L17.3932 23.7094L15 20.7L12.6068 23.7094L11.8864 19.9326L8.36877 21.4851L9.48601 17.806L5.64984 17.546L8.34885 14.8076L5.07291 12.7946L8.73539 11.6241L6.77016 8.31935L10.5571 8.98498L10.3528 5.14544L13.3966 7.49469L15 4Z" fill="white" /><path d="M20 14C20 16.7614 17.7614 19 15 19C12.2386 19 10 16.7614 10 14C10 11.2386 12.2386 9 15 9C17.7614 9 20 11.2386 20 14Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M15 18.0909C17.2593 18.0909 19.0909 16.2593 19.0909 14C19.0909 11.7407 17.2593 9.90909 15 9.90909C12.7407 9.90909 10.9091 11.7407 10.9091 14C10.9091 16.2593 12.7407 18.0909 15 18.0909ZM15 19C17.7614 19 20 16.7614 20 14C20 11.2386 17.7614 9 15 9C12.2386 9 10 11.2386 10 14C10 16.7614 12.2386 19 15 19Z" fill="#C2C2C2" /></svg>,
        // you can add any svg you want from https://fontawsome.com like above 
    };

    if (Object.prototype.hasOwnProperty.call(ICONS, props.name)) return ICONS[props.name];
    return null;
}