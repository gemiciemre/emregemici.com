import { readAsset } from "@/lib/assets";

// Shared "EG" monogram used for the favicon and the Apple touch icon.

export const loadMonogramFont = async () => ({
  name: "Inter",
  data: await readAsset("fonts", "Inter-SemiBold.ttf"),
  weight: 600,
  style: "normal",
});

export function Monogram({ size, radius }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#E85D04",
        borderRadius: radius,
        color: "#FFFFFF",
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: Math.round(size * 0.46),
        letterSpacing: "-0.06em",
        // optical centering: Inter's caps sit slightly high
        paddingTop: Math.round(size * 0.02),
      }}
    >
      EG
    </div>
  );
}
