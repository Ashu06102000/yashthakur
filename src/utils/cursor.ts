export function initializeCustomCursor() {
  const root = document.querySelector("html");
  if (!root) return;

  // Create cursor elements
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  root.appendChild(cursor);

  const follower = document.createElement("div");
  follower.classList.add("cursor", "cursor__follower");
  root.appendChild(follower);

  let lastX = 0,
    lastY = 0;
  let isMoving = false;
  let animationFrameId: number | null = null;

  // Function to set position
  const setPosition = (element: HTMLElement, e: MouseEvent) => {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  };

  // Check if the mouse is moving
  const checkMovement = () => {
    if (!isMoving) {
      cursor.style.opacity = "0";
      cursor.style.visibility = "hidden";
      cursor.style.pointerEvents = "none";

      follower.style.opacity = "0";
      follower.style.visibility = "hidden";
      follower.style.pointerEvents = "none";
    } else {
      isMoving = false;
      animationFrameId = requestAnimationFrame(checkMovement);
    }
  };

  // Mouse move event handler
  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientX === lastX && e.clientY === lastY) return;

    lastX = e.clientX;
    lastY = e.clientY;
    isMoving = true;

    setPosition(cursor, e);
    setPosition(follower, e);

    cursor.style.opacity = "1";
    cursor.style.visibility = "visible";
    cursor.style.pointerEvents = "auto";

    follower.style.opacity = "1";
    follower.style.visibility = "visible";
    follower.style.pointerEvents = "auto";

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(checkMovement);
    }
  };

  root.addEventListener("mousemove", handleMouseMove);

  // Cleanup function
  return () => {
    root.removeEventListener("mousemove", handleMouseMove);
    cursor.remove();
    follower.remove();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };
}
