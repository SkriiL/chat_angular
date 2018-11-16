import socket
import threading
import sys

class Server:
  sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  connections = []
  def __init__(self):
    self.sock.bind(('0.0.0.0', 12321))
    self.sock.listen(3)

  def handler(self, c, a):
    while True:
      data = c.recv(1024)
      print(data)
      for connection in self.connections:
        connection.send(data)
      if not data:
        print(str(a[0]) + ":" + str(a[1]), "disconnected")
        self.connections.remove(c)
        c.close()
        break

  def run(self):
    while True:
      c, a = self.sock.accept()
      t = threading.Thread(target=self.handler, args=(c, a))
      t.daemon = True
      t.start()
      self.connections.append(c)
      print(str(a[0]) + ":" + str(a[1]), "connected")


s = Server()
s.run()
