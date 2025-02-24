interface ColorSelectorProps {
  colors: string[];
  phoneName: string;
}

export const PhoneColorSelector = ({ colors, phoneName }: ColorSelectorProps) => {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
          title={
            phoneName === "iPhone 16" ? 
              index === 0 ? "Black" :
              index === 1 ? "Pink" :
              index === 2 ? "Teal" :
              index === 3 ? "Ultramarine" :
              "White"
            :
            phoneName.includes("Pro") ?
              index === 0 ? "White Titanium" :
              index === 1 ? "Natural Titanium" :
              index === 2 ? "Desert Titanium" :
              "Black Titanium"
            :
            phoneName === "Galaxy A53" ? 
              index === 0 ? "Black" :
              index === 1 ? "Champagne" :
              index === 2 ? "Green" :
              "Purple" :
            phoneName === "Galaxy S24" ?
              index === 0 ? "Violet" :
              index === 1 ? "Black" :
              index === 2 ? "Gray" :
              "Yellow" :
            phoneName === "Galaxy S24 Ultra" ?
              index === 0 ? "Violet" :
              index === 1 ? "Black" :
              index === 2 ? "Gray" :
              "Yellow" :
            color === "#F5F5F7" ? "White" :
            color === "#000000" ? "Black" :
            color
          }
        />
      ))}
    </div>
  );
};