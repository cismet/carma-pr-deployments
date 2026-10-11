import{j as n}from"./jsx-runtime-DNp_qQjF.js";import{M as o,p as r,b as i}from"./measurement-story-harness-MPbQ6TeP.js";const a=e=>n.jsx(o,{surfaceTiles:e.surfaceTiles,showAllTools:e.showAllTools,meterMarkers:e.meterMarkers,annotationIds:e.annotationIds,focusAnnotationId:e.focusAnnotationId,state:e.state,frame:!0,view:e.view,storageKey:`carma::stories::measurement-tool::${e.focusAnnotationId}`}),u=async({canvasElement:e,args:t})=>{await r(e,t.focusAnnotationId,t.editNodeIndex??0)},l=async({canvasElement:e})=>{await i(e)},m={controls:{exclude:["annotationIds","focusAnnotationId","state","editNodeIndex","view"]}};a.__docgenInfo={description:"",methods:[],displayName:"renderToolStory",props:{annotationIds:{required:!0,tsType:{name:"unknown"},description:""},focusAnnotationId:{required:!0,tsType:{name:"string"},description:""},state:{required:!0,tsType:{name:"union",raw:`| { kind: "committed" }
/** Selected: highlight, handles and info box. */
| { kind: "selected" }
/**
 * Selected, with the move gizmo on one node. The gizmo opens on a long
 * press on the node marker, so the story's play function presses it
 * (see \`pressNodeMarker\`); the state only prepares the selection.
 */
| { kind: "editing" }
/**
 * The tool active with a draft of the first \`nodes\` corners of the
 * fixture measurement; the measurement itself is left off the map.
 */
| { kind: "drafting"; toolId: AnnotationToolId; nodes: number }`,elements:[{name:"signature",type:"object",raw:'{ kind: "committed" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"committed"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "selected" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"selected"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "editing" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"editing"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "drafting"; toolId: AnnotationToolId; nodes: number }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"drafting"',required:!0}},{key:"toolId",value:{name:"AnnotationToolId",required:!0}},{key:"nodes",value:{name:"number",required:!0}}]}}]},description:""},editNodeIndex:{required:!1,tsType:{name:"number"},description:"Node the editing story presses."},view:{required:!1,tsType:{name:"signature",type:"object",raw:"{ pitch?: number; bearing?: number }",signature:{properties:[{key:"pitch",value:{name:"number",required:!1}},{key:"bearing",value:{name:"number",required:!1}}]}},description:"Direction the camera frames the measurement from."}}};export{l as a,u as p,a as r,m as t};
