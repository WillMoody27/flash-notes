import jsPDF from "jspdf";

export const exportAsPDF = () => {
  const margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    margins: margin,
  });

  const headerText = localStorage.getItem("docHeader") || "Document Title";
  const textContent = localStorage.getItem("text") || "";

  doc.setFontSize(12);

  // Add header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(margin.left, margin.top + 16, headerText);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  // Calculate available height for content
  const availableHeight =
    doc.internal.pageSize.height - margin.top - margin.bottom;

  // Split text into lines to fit within the available height
  const lines = doc.splitTextToSize(
    textContent,
    doc.internal.pageSize.width - margin.left - margin.right
  );

  let y = margin.top + 30;

  lines.forEach((line) => {
    if (y + doc.getTextDimensions(line).h > availableHeight) {
      doc.addPage();
      y = margin.top;
    }
    doc.text(margin.left, y, line);
    y += doc.getTextDimensions(line).h + 5;
  });

  // Footer
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(
      doc.internal.pageSize.width - margin.right - 10,
      doc.internal.pageSize.height - margin.bottom + 10,
      `Page ${i} of ${totalPages}`
    );
  }

  doc.save(`${headerText}.pdf`);
};
