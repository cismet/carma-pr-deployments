interface FuzzySearchProps {
    setFeatures: (hit: any) => void;
    setSelectedIndex: (idx: any) => void;
    onIconClick: () => void;
    mapSearchAllowed: boolean;
}
declare const FuzzySearchWrapper: ({ setFeatures, setSelectedIndex, onIconClick, mapSearchAllowed, }: FuzzySearchProps) => import("react/jsx-runtime").JSX.Element;
export default FuzzySearchWrapper;
