"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect, useState } from "react";
import {
  DollarSign,
  Repeat,
  Send,
  TrendingUp,
  FileText,
  Shield,
} from "lucide-react";

type ActionType = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const DEFAULT_ACTIONS: ActionType[] = [
  { id: "pagar", icon: <DollarSign size={28} />, label: "Pagar" },
  { id: "transferir", icon: <Repeat size={28} />, label: "Transferir" },
  { id: "pix", icon: <Send size={28} />, label: "Pix" },
  { id: "investir", icon: <TrendingUp size={28} />, label: "Investir" },
  { id: "fatura", icon: <FileText size={28} />, label: "Fatura" },
  { id: "seguros", icon: <Shield size={28} />, label: "Seguros" },
];

function DraggableAction({
  action,
  id,
  onClick,
  isEditing,
}: {
  action: ActionType;
  id: string;
  onClick: () => void;
  isEditing: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isEditing ? "move" : "pointer",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(isEditing ? { ...attributes, ...listeners } : {})}
      onClick={!isEditing ? onClick : undefined}
      className="flex flex-col items-center"
    >
      <div className="bg-gradient-to-br from-[var(--color-branco)] to-[var(--color-azul-claro)] p-4 rounded-full shadow-lg hover:shadow-xl transition">
        {action.icon}
      </div>
      <span className="mt-3 text-sm font-medium text-[var(--color-preto)]">
        {action.label}
      </span>
    </div>
  );
}

export default function QuickActions() {
  const [actions, setActions] = useState<ActionType[]>(DEFAULT_ACTIONS);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("quickActionsOrder");
    if (saved) {
      const savedOrder = JSON.parse(saved) as string[];
      const ordered = savedOrder
        .map((id) => DEFAULT_ACTIONS.find((a) => a.id === id))
        .filter(Boolean) as ActionType[];
      const missing = DEFAULT_ACTIONS.filter(
        (a) => !savedOrder.includes(a.id)
      );
      setActions([...ordered, ...missing]);
    }
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = actions.findIndex((a) => a.id === active.id);
    const newIndex = actions.findIndex((a) => a.id === over.id);
    const newOrder = arrayMove(actions, oldIndex, newIndex);
    setActions(newOrder);
    localStorage.setItem(
      "quickActionsOrder",
      JSON.stringify(newOrder.map((a) => a.id))
    );
  };

  const handleClick = (label: string) => {
    alert(`Você clicou em: ${label}`);
    
  };

  return (
    <div className="bg-[var(--color-branco)] p-7 rounded-md shadow-md overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[var(--color-preto)]">
          Ações Rápidas
        </h2>
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="text-sm font-medium px-4 py-2 rounded-md transition 
          bg-[var(--color-azul-escuro)] text-white hover:bg-[var(--color-azul-claro)]"
        >
          {isEditing ? "Concluir" : "Editar Ações"}
        </button>
      </div>

      <div className="mt-7">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={isEditing ? handleDragEnd : undefined}
        >
          <SortableContext
            items={actions.map((a) => a.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {actions.map((action) => (
                <DraggableAction
                  key={action.id}
                  id={action.id}
                  action={action}
                  onClick={() => handleClick(action.label)}
                  isEditing={isEditing}
                />
              ))}

            </div>

          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
