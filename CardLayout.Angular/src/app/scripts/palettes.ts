/**
 *  Palette handler
 */

import { NodeModel, ConnectorModel, SymbolPalette, Connector, SymbolInfo, Diagram, PortVisibility, BpmnDiagrams, PortConstraints } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);



export function getFlowShapes(): NodeModel[] {

    let flowShapes: NodeModel[] = [
        { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' }, style: { strokeWidth: 2 } },
        { id: 'Process', shape: { type: 'Flow', shape: 'Process' }, style: { strokeWidth: 2 } },
        { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' }, style: { strokeWidth: 2 } },
        { id: 'Document', shape: { type: 'Flow', shape: 'Document' }, style: { strokeWidth: 2 } },
        { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' }, style: { strokeWidth: 2 } },
        { id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' }, style: { strokeWidth: 2 } },
        { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' }, style: { strokeWidth: 2 } },
        { id: 'SequentialData', shape: { type: 'Flow', shape: 'SequentialData' }, style: { strokeWidth: 2 } },
        { id: 'Sort', shape: { type: 'Flow', shape: 'Sort' }, style: { strokeWidth: 2 } },
        { id: 'MultiDocument', shape: { type: 'Flow', shape: 'MultiDocument' }, style: { strokeWidth: 2 } },
        { id: 'Collate', shape: { type: 'Flow', shape: 'Collate' }, style: { strokeWidth: 2 } },
        { id: 'SummingJunction', shape: { type: 'Flow', shape: 'SummingJunction' }, style: { strokeWidth: 2 } },
        { id: 'Or', shape: { type: 'Flow', shape: 'Or' }, style: { strokeWidth: 2 } },
        { id: 'InternalStorage', shape: { type: 'Flow', shape: 'InternalStorage' }, style: { strokeWidth: 2 } },
        { id: 'Extract', shape: { type: 'Flow', shape: 'Extract' }, style: { strokeWidth: 2 } },
        { id: 'ManualOperation', shape: { type: 'Flow', shape: 'ManualOperation' }, style: { strokeWidth: 2 } },
        { id: 'Merge', shape: { type: 'Flow', shape: 'Merge' }, style: { strokeWidth: 2 } },
        { id: 'OffPageReference', shape: { type: 'Flow', shape: 'OffPageReference' }, style: { strokeWidth: 2 } },
        { id: 'SequentialAccessStorage', shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, style: { strokeWidth: 2 } },
        { id: 'Annotation', shape: { type: 'Flow', shape: 'Annotation' }, style: { strokeWidth: 2 } },
        { id: 'Annotation2', shape: { type: 'Flow', shape: 'Annotation2' }, style: { strokeWidth: 2 } },
        { id: 'data', shape: { type: 'Flow', shape: 'Data' }, style: { strokeWidth: 2 } },
        { id: 'Card', shape: { type: 'Flow', shape: 'Card' }, style: { strokeWidth: 2 } },
        { id: 'Delay', shape: { type: 'Flow', shape: 'Delay' }, style: { strokeWidth: 2 } },
        { id: 'Preparation', shape: { type: 'Flow', shape: 'Preparation' }, style: { strokeWidth: 2 } },
        { id: 'Display', shape: { type: 'Flow', shape: 'Display' }, style: { strokeWidth: 2 } },
        { id: 'ManualInput', shape: { type: 'Flow', shape: 'ManualInput' }, style: { strokeWidth: 2 } },
        { id: 'LoopLimit', shape: { type: 'Flow', shape: 'LoopLimit' }, style: { strokeWidth: 2 } },
        { id: 'StoredData', shape: { type: 'Flow', shape: 'StoredData' }, style: { strokeWidth: 2 } }
    ];

    return flowShapes;
}

export function generatePalette(): void {
    let palette: SymbolPalette = new SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            { id: 'flow', expanded: true, symbols: getFlowShapes(), title: 'Card Elements' }
        ],
        width: '100%', height: '100%', symbolHeight: 50, symbolWidth: 50,
        symbolPreview: { height: 100, width: 100 },
        enableSearch: true,
        getNodeDefaults: setPaletteNodeDefaults,
        symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
        getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
            return { fit: true };
        }
    });
    palette.appendTo('#symbolpalette');
}

function setPaletteNodeDefaults(node: NodeModel): void {
    if (node.id === 'Terminator' || node.id === 'Process') {
        node.width = 130;
        node.height = 65;
    }  else {
        node.width = 50;
        node.height = 50;
    }
    node.ports = [
        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
    ];
    node.style.strokeColor = '#3A3A3A';
    node.style.fill='#fff0'
}