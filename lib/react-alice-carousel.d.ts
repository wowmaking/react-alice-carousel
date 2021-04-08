import React from 'react';
import { EventData } from 'vanilla-swipe';
import { AnimationType, AutoplayDirection, EventObject, EventType, Props, SlideTo, State } from './types';
export * from './types';
export default class AliceCarousel extends React.PureComponent<Props, State> {
    static defaultProps: {
        activeIndex: number;
        animationDuration: number;
        animationEasingFunction: string;
        animationType: AnimationType;
        autoHeight: boolean;
        autoWidth: boolean;
        autoPlay: boolean;
        autoPlayControls: boolean;
        autoPlayDirection: AutoplayDirection;
        autoPlayInterval: number;
        autoPlayStrategy: import("./types").AutoPlayStrategy;
        children: undefined;
        controlsStrategy: import("./types").ControlsStrategy;
        disableButtonsControls: boolean;
        disableDotsControls: boolean;
        disableSlideInfo: boolean;
        infinite: boolean;
        innerWidth: number;
        items: undefined;
        mouseTracking: boolean;
        name: string;
        paddingLeft: number;
        paddingRight: number;
        responsive: undefined;
        swipeDelta: number;
        swipeExtraPadding: number;
        touchTracking: boolean;
        touchMoveDefaultEvents: boolean;
        onInitialized: () => undefined;
        onResized: () => undefined;
        onResizeEvent: undefined;
        onSlideChange: () => undefined;
        onSlideChanged: () => undefined;
    };
    private autoPlayTimeoutId;
    private isAnimationDisabled;
    private isHovered;
    private isTouchMoveProcessStarted;
    private cancelTouchAnimations;
    private hasUserAction;
    private rootElement;
    private rootComponentDimensions;
    private slideEndTimeoutId;
    private stageComponent;
    private startTouchmovePosition;
    private swipeListener;
    private touchEndTimeoutId;
    private _handleResizeDebounced;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Readonly<Props>, state: Readonly<State>): void;
    componentWillUnmount(): void;
    get eventObject(): EventObject;
    get isFadeoutAnimationAllowed(): boolean;
    get touchmovePosition(): number;
    slideTo(activeIndex?: number, eventType?: EventType): void;
    slidePrev(e: any): void;
    slideNext(e: any): void;
    _handleResize(e: Event): Promise<void>;
    _handleTouchmove(e: any, eventData: EventData): void;
    _handleTouchend(e: any, { deltaX }: EventData): void;
    _handleBeforeTouchEnd(position: number): void;
    _handleSlideTo({ activeIndex, fadeoutAnimationIndex, fadeoutAnimationPosition, eventType, }: SlideTo): Promise<void>;
    _handleBeforeSlideEnd: (eventType?: EventType | undefined) => Promise<void>;
    _handleUpdateSlidePosition(activeIndex: any): Promise<void>;
    _handleResized(): void;
    _handleSlideChange(eventType?: EventType): void;
    _handleSlideChanged(eventType?: EventType): Promise<void>;
    _handleDotClick(index: any): void;
    _handleMouseEnter: () => void;
    _handleMouseLeave: () => void;
    _handlePlay(): void;
    _handlePause: () => void;
    _handlePlayPauseToggle: () => Promise<void>;
    _cancelTimeoutAnimations(): void;
    _clearAutoPlayTimeout(): void;
    _clearSlideEndTimeout(): void;
    clearTouchendTimeout(): void;
    _clearTouchmovePosition(): void;
    _setTouchmovePosition(): void;
    _setRootComponentRef: (node: any) => any;
    _setStageComponentRef: (node: any) => any;
    _setInitialState(): Promise<void>;
    _setAutoPlayInterval(): void;
    _setupSwipeHandlers(): void;
    _updateComponent(props?: Readonly<Props> & Readonly<{
        children?: React.ReactNode;
    }>): void;
    _updateSwipeProps(): void;
    _renderStageItem: (item: any, i: number) => JSX.Element;
    _renderSlideInfo: () => JSX.Element;
    _renderDotsNavigation(): JSX.Element;
    _renderPrevButton(): JSX.Element;
    _renderNextButton(): JSX.Element;
    _renderPlayPauseButton(): JSX.Element;
    render(): JSX.Element;
}
