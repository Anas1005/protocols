import TechnicalTerms from '@/components/Terms';
import React from 'react';

const CommunicationProtocolsTable = () => {
  return (
    <div className="overflow-x-auto flex flex-col space-y-6">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="">
            <th className="border border-gray-400 px-4 py-2">Protocol</th>
            <th className="border border-gray-400 px-4 py-2">Features</th>
            <th className="border border-gray-400 px-4 py-2">Working</th>
            <th className="border border-gray-400 px-4 py-2">Advantages</th>
            <th className="border border-gray-400 px-4 py-2">Disadvantages</th>
            <th className="border border-gray-400 px-4 py-2">Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">I2C (Inter-Integrated Circuit)</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Two-wire serial communication protocol.</li>
                <li>Supports multiple slave devices connected to a single master.</li>
                <li>Allows for both synchronous and asynchronous data transmission.</li>
                <li>Operates at speeds up to 400 kHz (standard mode) or 3.4 MHz (fast mode).</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Master-slave architecture where the master initiates communication with the slave devices.</li>
                <li>Uses two lines: SDA (serial data) and SCL (serial clock).</li>
                <li>Data transmission involves the master sending a start condition, followed by the address of the slave, and then the data.</li>
                <li>Includes acknowledgment mechanism for reliable data transfer.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Simple hardware requirements.</li>
                <li>Supports multiple devices on the same bus.</li>
                <li>Supports multi-master operation.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Limited distance due to the capacitance of the bus.</td>
            <td className="border border-gray-400 px-4 py-2">Used in sensors, EEPROMs, real-time clocks (RTC), and other low-speed peripheral devices.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">SPI (Serial Peripheral Interface)</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Synchronous serial communication protocol.</li>
                <li>Supports full-duplex communication (simultaneous data transmission and reception).</li>
                <li>Requires more pins compared to I2C.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Typically operates in a master-slave configuration.</li>
                <li>Uses four lines: MISO (Master In Slave Out), MOSI (Master Out Slave In), SCK (Serial Clock), and SS (Slave Select).</li>
                <li>Data transmission involves the master sending clock pulses while simultaneously sending/receiving data.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>High-speed data transfer.</li>
                <li>Suitable for short-distance communication.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Requires more pins.</td>
            <td className="border border-gray-400 px-4 py-2">Ideal for interfacing with sensors, data converters, and flash memories.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">PCI (Peripheral Component Interconnect)</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Parallel bus architecture for connecting hardware devices to a computer motherboard.</li>
                <li>Supports Plug and Play functionality.</li>
                <li>Initially designed for desktop computers.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Utilizes a shared parallel bus architecture.</li>
                <li>Data transfer occurs between devices connected to the bus and the CPU.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>High data transfer rates.</li>
                <li>Suitable for high-performance computing tasks.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Limited scalability. Not hot-pluggable.</td>
            <td className="border border-gray-400 px-4 py-2">Commonly used in desktop computers for connecting expansion cards like graphics cards, network adapters, and storage controllers.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">PCI Express</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>High-speed serial communication protocol.</li>
                <li>Successor to PCI with improved performance and scalability.</li>
                <li>Utilizes point-to-point connections.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Employs serial lanes for data transfer.</li>
                <li>Supports multiple lanes (x1, x4, x8, x16) for varying bandwidth requirements.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>High scalability and bandwidth.</li>
                <li>Lower latency compared to PCI.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Higher cost compared to PCI.</td>
            <td className="border border-gray-400 px-4 py-2">Widely used in modern desktops, servers, and embedded systems for connecting graphics cards, storage devices, and high-speed network adapters.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">CAN (Controller Area Network)</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Serial communication protocol designed for robust and reliable communication in automotive and industrial applications.</li>
                <li>Supports multi-master and multi-drop configurations.</li>
                <li>Prioritizes real-time performance and fault tolerance.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Uses differential signaling for noise immunity.</li>
                <li>Data transmission occurs in frames with error detection and acknowledgment mechanisms.</li>
                <li>Includes arbitration mechanism for priority-based message transmission.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>High reliability in noisy environments.</li>
                <li>Supports long-distance communication.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Lower data transfer rates compared to other protocols.</td>
            <td className="border border-gray-400 px-4 py-2">Used in automotive systems (e.g., engine control units, airbag systems), industrial automation, and medical devices.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">USB (Universal Serial Bus)</td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Serial bus standard for connecting devices to computers and other peripherals.</li>
                <li>Supports hot-plugging and plug-and-play functionality.</li>
                <li>Offers multiple transfer modes like bulk, isochronous, and interrupt.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Host-centric architecture with devices acting as slaves.</li>
                <li>Uses differential signaling for noise immunity.</li>
                <li>Data transmission involves packets with error detection and correction.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <ul className="list-disc list-inside">
                <li>Wide adoption and compatibility across devices.</li>
                <li>High data transfer rates with USB 3.0 and later versions.</li>
              </ul>
            </td>
            <td className="border border-gray-400 px-4 py-2">Limited cable length for high-speed communication.</td>
            <td className="border border-gray-400 px-4 py-2">Used in various devices including external storage drives, keyboards, mice, printers, and smartphones for data transfer and peripheral connectivity.</td>
          </tr>
        </tbody>
      </table>

      <TechnicalTerms/>
    </div>
  );
};

export default CommunicationProtocolsTable;
