import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

export default function Model({ color }) {
  const Car_Model = useGLTF("./207car.glb");
  Car_Model.scene.children[0].material.color.set(color);
  return (
    <>
      <OrbitControls />
      <Stage>
        <primitive object={Car_Model.scene} />
      </Stage>
    </>
  );
}
