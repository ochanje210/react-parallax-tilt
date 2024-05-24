import React$1, { MouseEvent, TouchEvent, PureComponent } from 'react';

type DOMSupportedEvent = Event | MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement> | DeviceOrientationEvent;
type SupportedEvent = DOMSupportedEvent | CustomEvent<CustomEventType>;
type CustomEventType = 'autoreset' | 'initial' | 'propChange';

type GlareProps = {
    /**
     * Boolean to enable/disable glare effect.
     */
    glareEnable?: boolean;
    /**
     * The maximum glare opacity (0.5 = 50%, 1 = 100%, etc.). Range: 0 - 1
     */
    glareMaxOpacity?: number;
    /**
     * Set color of glare effect.
     */
    glareColor?: string;
    /**
     * Set position of glare effect.
     */
    glarePosition?: GlarePosition;
    /**
     * Reverse the glare direction.
     */
    glareReverse?: boolean;
    /**
     * Set the border radius of the glare.
     */
    glareBorderRadius?: string;
};
type GlarePosition = 'top' | 'right' | 'bottom' | 'left' | 'all';

type TiltProps = {
    /**
     * Boolean to enable/disable tilt effect.
     */
    tiltEnable?: boolean;
    /**
     * Reverse the tilt direction.
     */
    tiltReverse?: boolean;
    /**
     * Initial tilt value (degrees) on x axis.
     */
    tiltAngleXInitial?: number;
    /**
     * Initial tilt value (degrees) on y axis.
     */
    tiltAngleYInitial?: number;
    /**
     * Max tilt rotation (degrees) on x axis. Range: 0 - 90
     */
    tiltMaxAngleX?: number;
    /**
     * Max tilt rotation (degrees) on y axis. Range: 0 - 90
     */
    tiltMaxAngleY?: number;
    /**
     * Which axis should be enabled.
     */
    tiltAxis?: Axis;
    /**
     * Manual tilt rotation (degrees) on x axis.
     */
    tiltAngleXManual?: number | null;
    /**
     * Manual tilt rotation (degrees) on y axis.
     */
    tiltAngleYManual?: number | null;
};
type Axis = 'x' | 'y';

type OnMoveParams = {
    tiltAngleX: number;
    tiltAngleY: number;
    tiltAngleXPercentage: number;
    tiltAngleYPercentage: number;
    glareAngle: number;
    glareOpacity: number;
    eventType: string;
};
type OnMove = (onMoveParams: OnMoveParams) => void;
type HtmlDivTilt = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
type ReactParallaxTiltProps = TiltProps & GlareProps & HtmlDivTilt & {
    /**
     * Tilt children component
     */
    children?: React.ReactNode;
    /**
     * Scale of the component (1.5 = 150%, 2 = 200%, etc.).
     */
    scale?: number;
    /**
     * The perspective property defines how far the object (wrapped/child component) is away from the user. The lower the more extreme the tilt gets.
     */
    perspective?: number;
    /**
     * Boolean to enable/disable vertical flip of component.
     */
    flipVertically?: boolean;
    /**
     * Boolean to enable/disable horizontal flip of component.
     */
    flipHorizontally?: boolean;
    /**
     * If the effects has to be reset on "onLeave" event.
     */
    reset?: boolean;
    /**
     * Easing of the transition when manipulating the component.
     */
    transitionEasing?: string;
    /**
     * Speed of the transition when manipulating the component.
     */
    transitionSpeed?: number;
    /**
     * Track mouse and touch events on the whole window.
     */
    trackOnWindow?: boolean;
    /**
     * Track mouse and touch events on the given component.
     */
    trackOnElement?: HTMLElement | null;
    /**
     * Boolean to enable/disable device orientation detection.
     */
    gyroscope?: boolean;
    /**
     * Gets triggered when user moves on the component.
     */
    onMove?: OnMove;
    /**
     * Gets triggered when user enters the component.
     */
    onEnter?: (eventType: string) => void;
    /**
     * Gets triggered when user leaves the component.
     */
    onLeave?: (eventType: string) => void;
};

declare class ReactParallaxTilt extends PureComponent<ReactParallaxTiltProps> {
    static defaultProps: ReactParallaxTiltProps;
    private wrapperEl;
    private tilt;
    private glare;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    private addEventListeners;
    private addDeviceOrientationEventListener;
    private removeEventListeners;
    setSize: () => void;
    private setWrapperElSize;
    private initGlare;
    mainLoop: (event: SupportedEvent) => void;
    private onEnter;
    private onMove;
    private emitOnMove;
    private onLeave;
    private processInput;
    private processInputDeviceOrientation;
    private update;
    private updateClientInput;
    private updateFlip;
    renderFrame: () => void;
    private resetWrapperElTransform;
    private renderPerspective;
    private renderScale;
    private setTransitions;
    render(): React$1.JSX.Element;
}

export { type Axis, type GlarePosition, type GlareProps, type OnMoveParams, type ReactParallaxTiltProps, type TiltProps, ReactParallaxTilt as default };
