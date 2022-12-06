import { useBox } from '@react-three/cannon';
import { useGLTF, Sparkles } from '@react-three/drei';
import { PointsMaterial } from 'three';

const Hall = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/hall.glb');

  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));
  // console.log(nodes['mesh_0'].geometry);
  // console.log(materials);

  const material = new PointsMaterial({ color: 0xffffff, size: 0.01 });
  
  return (
    <group ref={ref} {...props} dispose={null}>
      <points
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['mesh_0'].geometry}
        material={material}
      />
    </group>
  );
};

export default Hall;