import { useState } from "react";
import { CloudUpload, FileText, Trash2, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UploadReport() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const isPremium = localStorage.getItem("userType") === "premium";
  const navigate = useNavigate();

  if (!isPremium) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4 bg-[#FFF8F0] font-[Poppins]">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1E22] mb-4">Premium Access Required 🔒</h1>
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
            This feature is exclusive to premium users. Please upgrade to unlock report uploads.
          </p>
          <button
            onClick={() => navigate("/premium")}
            className="px-5 py-2 bg-[#7B1E22] text-white rounded-full hover:bg-[#5a1417] transition"
          >
            Upgrade to Premium
          </button>
        </div>
      </div>
    );
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const maxSizeMB = 5;

    const validated = files.filter((file) => {
      if (file.size / 1024 / 1024 > maxSizeMB) {
        alert(`❗ ${file.name} exceeds ${maxSizeMB}MB limit.`);
        return false;
      }
      return true;
    });

    setUploadedFiles((prev) => [...prev, ...validated]);
  };

  const handleFileRemove = (index) => {
    const updated = [...uploadedFiles];
    updated.splice(index, 1);
    setUploadedFiles(updated);
  };

  const handleDownload = (record) => {
    console.log("Downloading:", record.name);
    // Optional: trigger file download logic here
  };

  const handleDelete = (record) => {
    console.log("Deleting:", record.name);
    // Optional: deletion API logic here
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-[Poppins] pt-0 pb-20 flex flex-col items-center px-4">

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#F8F4EC] to-[#f2dad5] w-full h-[280px] md:h-[320px] shadow-md rounded-b-3xl flex items-center justify-center mb-10">
        <div className="text-center space-y-3 px-2 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#660000] leading-tight">
            Upload Reports
          </h1>
          <p className="text-sm md:text-base text-[#7a4f4f] font-medium">
            Securely upload and manage your health documents
          </p>
        </div>
      </div>

      {/* Mode Switch */}
      <div className="flex justify-center items-center gap-2 bg-[#FBF5F5] p-1 rounded-full shadow-inner w-[220px] mb-8">
        <button className="bg-[#7B1E22] text-white px-4 py-1.5 text-sm rounded-full font-medium">
          New Upload
        </button>
        <button className="text-[#7B1E22] px-4 py-1.5 text-sm rounded-full font-medium">
          Recent
        </button>
      </div>

      {/* Upload Area */}
      <label className="w-full max-w-md min-h-[240px] border-2 border-dashed border-[#7B1E22] bg-white/60 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#fff0e8] transition-shadow duration-300 shadow-md hover:shadow-xl mb-10 px-4">
        <CloudUpload className="h-9 w-9 text-[#7B1E22] mb-2" />
        <p className="text-[#7B1E22] text-sm text-center font-medium">
          Click or drag and drop files (Max 5MB)
        </p>
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleFileUpload}
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </label>

      {/* Uploaded File Preview */}
      {uploadedFiles.length > 0 && (
        <div className="w-full max-w-md space-y-4 mb-12">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/90 border border-[#f1e0e0] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="text-[#7B1E22]" />
                <span className="text-gray-800 text-sm font-medium truncate max-w-[180px]">
                  {file.name}
                </span>
              </div>
              <button onClick={() => handleFileRemove(index)} title="Remove file">
                <Trash2 className="text-red-500 hover:text-red-700 w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Historical Records (Static for Now) */}
      <div className="w-full max-w-6xl px-2 sm:px-4">
        <h2 className="text-xl font-semibold text-[#7B1E22] mb-5 text-center sm:text-left">
          Previous Records
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Blood Test Report.pdf", date: "2024-07-10" },
            { name: "MRI Scan.pdf", date: "2024-06-28" },
            { name: "Prescription_June.pdf", date: "2024-06-15" },
          ].map((record, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-[#EADCDC] rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.015] transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-md font-semibold text-[#333] mb-1">{record.name}</h3>
                <p className="text-xs text-gray-500 mb-4">Uploaded on {record.date}</p>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => handleDownload(record)}
                  className="text-[#7B1E22] hover:text-[#5f1316]"
                  title="Download"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={() => handleDelete(record)}
                  className="text-red-500 hover:text-red-600"
                  title="Delete"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
